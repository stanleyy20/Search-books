import { ChangeEvent, useContext } from 'react';

import { StoreContext } from '../../stores/StoreProvider';
import LoadingIndicator from '../LoadingIndicator/LoadingIndicator';
import OptionsMenu from '../OptionsMenu/OptionsMenu';

import { Data } from '../../types/types';

import './Form.style.scss';

const Form = () => {
  const { getBooks, setInputValue, inputValue } = useContext(StoreContext) as Data;

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const placeholderText = `Book's title`;

  return (
    <form className='form' action=''>
      <h2 className='main-title'>Search your favorite books</h2>
      <input className='input' type='text' placeholder={placeholderText} onChange={handleOnChange} value={inputValue} />
      <input className='btn' type='submit' value='search' onClick={getBooks} />
      <OptionsMenu />
      <LoadingIndicator />
    </form>
  );
};

export default Form;
