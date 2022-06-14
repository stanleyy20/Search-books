import { Route, Routes } from 'react-router-dom';

import Form from './components/Form/Form';
import Result from './components/Result/Result';
import StoreProvider from './stores/StoreProvider';
import TitlePage from './components/TitlePage/TitlePage';

function App() {
  return (
    <StoreProvider>
      <Routes>
        <Route path='/' element={<TitlePage />} />
        <Route
          path='/main'
          element={
            <>
              <Form />
              <Result />
            </>
          }
        />
      </Routes>
    </StoreProvider>
  );
}

export default App;
