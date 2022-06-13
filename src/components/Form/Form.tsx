import { ChangeEvent, useContext } from 'react';

import { StoreContext } from '../../stores/StoreProvider';
import LoadingIndicator from '../LoadingIndicator/LoadingIndicator';

import { Data } from '../../types/types';
import language from '../../helpers/language';

import './Form.style.scss';

const Form = () => {
  const { getBooks, setInputValue, inputValue, setLanguages } = useContext(StoreContext) as Data;

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleOnSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setLanguages(e.target.value);
  };

  const placeholderText = `Book's title`;

  return (
    <form className='form' action=''>
      <h2 className='main-title'>Search your favorite books</h2>
      <input className='input' type='text' placeholder={placeholderText} onChange={handleOnChange} value={inputValue} />
      <input className='btn' type='submit' value='search' onClick={getBooks} />
      <label className='label-language' htmlFor='language-select'>
        Choose languages:
      </label>
      <select className='select-language' name='language' id='language-select' onChange={handleOnSelect}>
        {language.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
      <LoadingIndicator />
    </form>
  );
};

export default Form;
