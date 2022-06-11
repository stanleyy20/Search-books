import React, { createContext, useState, SyntheticEvent } from 'react';
import { trackPromise } from 'react-promise-tracker';

import { Data } from '../types/types';

export interface StoreProps {
  children: React.ReactNode;
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
  const [languages, setLanguages] = useState('');

  const API = `https://gnikdroy.pythonanywhere.com/api/book/?format=json&search=${inputValue}&languages=${languages}`;

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
            setData(data.results);
            setTotalCount(data.count);
            setNextPage(data.next);
            setPreviousPage(data.previous);
            setLanguages('');
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
        languages,
        setLanguages,
        inputValue,
      }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
