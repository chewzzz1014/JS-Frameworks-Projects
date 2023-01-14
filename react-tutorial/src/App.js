import './App.css';
import Square from './components/Square';

function App() {
  return (
    <div className="App">
      <div className="board-row">
        <Square
          key='1'
          value='1'
        />
        <Square
          key='2'
          value='2'
        />
        <Square
          key='3'
          value='3'
        />
      </div>
      <div className="board-row">
        <Square
          key='4'
          value='4'
        />
        <Square
          key='5'
          value='5'
        />
        <Square
          key='6'
          value='6'
        />
      </div>
      <div className="board-row">
        <Square
          key='7'
          value='7'
        />
        <Square
          key='8'
          value='8'
        />
        <Square
          key='9'
          value='9'
        />
      </div>
    </div>
  );
}

export default App;
