import React, { createContext, useState, Dispatch, SetStateAction, SyntheticEvent } from 'react';
import { trackPromise } from 'react-promise-tracker';

export interface StoreProps {
  children: React.ReactNode;
}

export interface Data {
  inputValue: string;
  error: boolean;
  data: any;
  totalCount: number | null;
  title: string;
  nextPage: string | null;
  previousPage: string | null;
  getBooks: (e: SyntheticEvent) => void;
  goToNextPage: (e: SyntheticEvent) => void;
  goToPreviousPage: (e: SyntheticEvent) => void;
  setInputValue: Dispatch<SetStateAction<string>>;
}

export const StoreContext = createContext<Data | null>(null);

const StoreProvider = ({ children }: StoreProps) => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const [totalCount, setTotalCount] = useState(null);
  const [title, setTitle] = useState('');
  const [nextPage, setNextPage] = useState('');
  const [previousPage, setPreviousPage] = useState('');

  const API = `https://gnikdroy.pythonanywhere.com/api/book/?format=json&search=${inputValue}`;

  const booksApi = async (url: string) => {
    if (inputValue === '') {
      alert('Wpisz tytuł książki');
      return;
    } else {
      await trackPromise(
        fetch(url)
          .then((response) => {
            if (response.ok) {
              return response;
            }
            throw Error('Nie udało się wczytać danych');
          })
          .then((response) => response.json())
          .then((data) => {
            setTitle(inputValue);
            setError(false);
            // setInputValue('');
            setData(data.results);
            setTotalCount(data.count);
            setNextPage(data.next);
            setPreviousPage(data.previous);
          })
          .catch((error) => {
            console.log(error);
            setError(true);
          })
      );
    }
  };

  const getBooks = (e: SyntheticEvent) => {
    e.preventDefault();
    booksApi(API);
  };

  const goToNextPage = (e: SyntheticEvent) => {
    e.preventDefault();
    if (!nextPage) return;
    else booksApi(nextPage);
  };

  const goToPreviousPage = (e: SyntheticEvent) => {
    e.preventDefault();
    if (!previousPage) return;
    else booksApi(previousPage);
  };

  return (
    <StoreContext.Provider
      value={{
        inputValue,
        error,
        data,
        totalCount,
        title,
        nextPage,
        previousPage,
        getBooks,
        goToNextPage,
        setInputValue,
        goToPreviousPage,
      }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
