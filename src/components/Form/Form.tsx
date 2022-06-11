import React, { ChangeEvent, useContext } from 'react';

import { Data } from '../../stores/StoreProvider';

import { StoreContext } from '../../stores/StoreProvider';

const Form = () => {
  const { getBooks, setInputValue, inputValue } = useContext(StoreContext) as Data;

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <form action=''>
      <input type='text' onChange={handleOnChange} value={inputValue} />
      <input type='submit' value='search' onClick={getBooks} />
    </form>
  );
};

export default Form;
