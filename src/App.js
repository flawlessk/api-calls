import './App.css';
import CatalogProduct from './components/CatalogProduct';
import ProductValidation from './components/ProductValidation';
import Search from './components/Search';
import Sort from './components/Sort';

function App() {
  return (
    <div className="App">
      <div style={{marginTop: 50, marginLeft: 50, display: "flex", gap: 50}}>
        <Sort />
        <Search />
      </div>
      <CatalogProduct />
      <ProductValidation />
    </div>
  );
}

export default App;
