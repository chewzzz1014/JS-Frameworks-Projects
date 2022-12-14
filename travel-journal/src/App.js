import './App.css';
import NavBar from './components/NavBar';
import Article from './components/Article';
import data from './data/location'

// create Article component for all locations
const articleComponent = data.map((ele) => {
  return <Article data={ele} />
})

function App() {
  return (
    <div>
      <NavBar />
      {articleComponent}
    </div>
  );
}

export default App;
