import './App.css';

import Form from './components/Form/Form';
import Result from './components/Result/Result';
import StoreProvider from './stores/StoreProvider';

function App() {
  return (
    <StoreProvider>
      <div className='App'>
        <Form />
        <Result />
      </div>
    </StoreProvider>
  );
}

export default App;
