import './App.scss';
import { Basket } from './components/Basket';
import { ProductList } from './components/Product';

function App() {
  return (
    <>
      <div className='container mt-3'>
        <Basket />
        <ProductList />
      </div>
    </>
  );
}

export default App;
