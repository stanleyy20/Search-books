import { useContext, SyntheticEvent, ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StoreContext } from '../../stores/StoreProvider';

import { Data } from '../../types/types';
// import language from '../../helpers/language';
// setLanguages;

import './TitlePage.style.scss';

const placeholderText = `Book's title`;

const TitlePage = () => {
  const { getBooks, setInputValue, inputValue } = useContext(StoreContext) as Data;
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const changeVisibility = (e: SyntheticEvent) => {
    e.preventDefault();
    setIsVisible((prev) => !prev);
  };

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

  const optionsMenu = isVisible ? <div className='options-container'>in progres..</div> : null;
  const showHide = isVisible ? 'hide' : 'show';

  return (
    <div className='title-page'>
      <form className='form-main'>
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
        <br />
        <p className='more-options' onClick={changeVisibility}>
          {showHide} more options
        </p>
      </form>
      {optionsMenu}
    </div>
  );
};

export default TitlePage;
