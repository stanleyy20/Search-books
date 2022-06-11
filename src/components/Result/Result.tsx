import { Data } from '../../stores/StoreProvider';

import { useContext } from 'react';
import { StoreContext } from '../../stores/StoreProvider';

import Input from './subcomponent/Input';
import Button from './subcomponent/Button';

import './result.style.css';

const Result: React.FC = () => {
  const { data, totalCount, title, goToNextPage, goToPreviousPage } = useContext(StoreContext) as Data;

  let bookUrlAdres = data.map((data: any) => {
    return data.resources.map((resource: any) => {
      return resource.uri;
    });
  });

  bookUrlAdres = bookUrlAdres.map((url: any) => {
    return url.find((url: any) => {
      return url.slice(-3) === 'htm';
    });
  });

  const handleOnClick = (url: string) => {
    window.location.href = url;
  };

  const bookList: JSX.Element = data.map((data: any, index: number) => {
    return (
      <li key={data.id} id={data.id}>
        <details>
          <summary>{data.title}</summary>
          {data.subjects}
          <Button text='Read' onClick={() => handleOnClick(bookUrlAdres[index])} />
          <Input />
        </details>
      </li>
    );
  });

  let textInfo: JSX.Element | null = <p>Nie znaleziono ksiażki o tytule {title}</p>;

  if (totalCount === null) {
    textInfo = null;
  }

  const pageButton = (
    <div>
      <button onClick={goToPreviousPage}>Previous</button>
      <button onClick={goToNextPage}>Next</button>
    </div>
  );

  return (
    <div className='result'>
      <ul>{totalCount ? bookList : textInfo}</ul>
      {totalCount ? pageButton : null}
    </div>
  );
};

export default Result;
