import { Data } from '../../stores/StoreProvider';

import { useContext } from 'react';
import { StoreContext } from '../../stores/StoreProvider';

import Input from './subcomponent/Input/Input';
import Button from './subcomponent/Button/Button';

import './Result.style.scss';

const Result: React.FC = () => {
  const { data, totalCount, title, goToNextPage, goToPreviousPage, nextPage, previousPage } = useContext(
    StoreContext
  ) as Data;

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
          <summary>
            <h3 className='title'>{data.title}</h3>
          </summary>
          <p className='description'>Description: {data.subjects}</p>
          {/* <p className='description'>Description: {data.description}</p> */}
          <Button text='Read' onClick={() => handleOnClick(bookUrlAdres[index])} />
          <Input />
          <p className='last'>Language: {data.languages} </p>
        </details>
      </li>
    );
  });

  let textInfo: JSX.Element | null = <p className='no-result'>Nie znaleziono ksiażki o tytule {title}</p>;

  if (totalCount === null) {
    textInfo = null;
  }

  const pageButton = (
    <div className='pageBtnContainer'>
      <button
        className='pageBtn'
        style={previousPage ? { opacity: 1 } : { opacity: 0.5, pointerEvents: 'none' }}
        onClick={goToPreviousPage}>
        Previous
      </button>
      <button
        className='pageBtn'
        style={nextPage ? { opacity: 1 } : { opacity: 0.5, pointerEvents: 'none' }}
        onClick={goToNextPage}>
        Next
      </button>
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
