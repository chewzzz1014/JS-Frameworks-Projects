import './App.css';
import FilterableProductTable from './components/FilterableProductTable'
import products from './components/data'

function App() {
  return (
    <div className="App">
      <FilterableProductTable
        products={products}
      />
    </div>
  );
}

export default App;
