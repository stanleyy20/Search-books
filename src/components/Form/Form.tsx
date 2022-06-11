import { ChangeEvent, useContext } from 'react';

import { Data } from '../../stores/StoreProvider';

import { StoreContext } from '../../stores/StoreProvider';
import LoadingIndicator from '../LoadingIndicator/LoadingIndicator';

import './Form.style.scss';

const Form = () => {
  const { getBooks, setInputValue, inputValue } = useContext(StoreContext) as Data;

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <form className='form' action=''>
      <input className='input' type='text' onChange={handleOnChange} value={inputValue} />
      <input className='btn' type='submit' value='search' onClick={getBooks} />
      <LoadingIndicator />
    </form>
  );
};

export default Form;
