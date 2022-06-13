import { useContext, SyntheticEvent, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { StoreContext } from '../../stores/StoreProvider';

import { Data } from '../../types/types';
import language from '../../helpers/language';

import './TitlePage.style.scss';

const placeholderText = `Book's title`;

const TitlePage = () => {
  const { getBooks, setInputValue, inputValue, setLanguages } = useContext(StoreContext) as Data;
  const navigate = useNavigate();

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  //   const handleOnSelect = (e: ChangeEvent<HTMLSelectElement>) => {
  //     setLanguages(e.target.value);
  //   };

  const changePage = () => {
    if (!inputValue) return;
    navigate('/main');
  };

  const handleOnClick = (e: SyntheticEvent) => {
    changePage();
    getBooks(e);
  };

  return (
    <div className='title-page'>
      <form className='form-main' action=''>
        <h1>Search your favorite books</h1>
        <input
          className='input-main'
          type='text'
          placeholder={placeholderText}
          onChange={handleOnChange}
          value={inputValue}
        />
        <button className='btn-main' onClick={handleOnClick}>
          Search
        </button>
      </form>
    </div>
  );
};

export default TitlePage;
