import { ChangeEvent, useContext } from 'react';

import { StoreContext } from '../../stores/StoreProvider';

import { Data } from '../../types/types';
import language from '../../helpers/language';

import './OptionsMenu.style.scss';

const OptionsMenu: React.FC = () => {
  const { setLanguages, setBookAuthor, bookAuthor, setBookDescription, bookDescription } = useContext(
    StoreContext
  ) as Data;

  const handleOnSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setLanguages(e.target.value);
  };

  const handleOnChangeAuthor = (e: ChangeEvent<HTMLInputElement>) => {
    setBookAuthor(e.target.value);
  };

  const handleOnChangeDescription = (e: ChangeEvent<HTMLInputElement>) => {
    setBookDescription(e.target.value);
  };

  return (
    <>
      <label className='label-language' htmlFor='language-select'>
        Choose languages:
      </label>
      <select className='select-language' name='language' id='language-select' onChange={handleOnSelect}>
        {language.map((option) => (
          <option key={option.key} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <label className='author' htmlFor='author'>
        Author:
      </label>
      <input type='text' className='author-input' onChange={handleOnChangeAuthor} value={bookAuthor} />
      <label className='description' htmlFor='description'>
        Description:
      </label>
      <input className='description-input' type='text' onChange={handleOnChangeDescription} value={bookDescription} />
    </>
  );
};

export default OptionsMenu;
