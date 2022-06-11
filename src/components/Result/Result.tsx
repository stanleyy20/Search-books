import { Data } from '../../stores/StoreProvider';

import { useContext } from 'react';
import { StoreContext } from '../../stores/StoreProvider';

import './result.style.css';

const Result: React.FC = () => {
  const { data, totalCount, title, goToNextPage, goToPreviousPage } = useContext(StoreContext) as Data;

  let mainContent: JSX.Element;

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
          <br />
          <button onClick={() => handleOnClick(bookUrlAdres[index])}>Czytaj</button>
          <input type='checkbox' id='important' />
          <label htmlFor='important'>Dodaj do ulubionych</label>
        </details>
      </li>
    );
  });

  const textInfo: JSX.Element = <p>Nie znaleziono ksiażki o tytule {title}</p>;

  const pageButton = (
    <div>
      <button onClick={goToPreviousPage}>Previous</button>
      <button onClick={goToNextPage}>Next</button>
    </div>
  );

  if (totalCount !== 0) {
    mainContent = bookList;
  } else {
    mainContent = textInfo;
  }

  return (
    <div className='result'>
      <ul>{totalCount ? mainContent : null}</ul>
      {totalCount ? pageButton : null}
    </div>
  );
};

export default Result;
