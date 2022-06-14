import { ChangeEvent, useContext } from 'react';

import { StoreContext } from '../../../stores/StoreProvider';

import { Data } from '../../../types/types';
import language from '../../../helpers/language';

const OptionsMenu: React.FC = () => {
  const { setLanguages } = useContext(StoreContext) as Data;

  const handleOnSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setLanguages(e.target.value);
  };

  return (
    <>
      <label className='label-language' htmlFor='language-select'>
        Choose languages:
      </label>
      <select className='select-language' name='language' id='language-select' onChange={handleOnSelect}>
        {language.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </>
  );
};

export default OptionsMenu;
