import './App.scss';

import Form from './components/Form/Form';
import Result from './components/Result/Result';
import StoreProvider from './stores/StoreProvider';

function App() {
  return (
    <StoreProvider>
      <div className='app-container'>
        <h2 className='main-title'>Search your favorite books</h2>
        <Form />
        <Result />
      </div>
    </StoreProvider>
  );
}

export default App;
