import './App.css';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  // dispatch action
  const increment = () => {
    dispatch({
      type: 'INC',
    })
  }

  // dispatch action
  const decrement = () => {
    dispatch({
      type: 'DESC'
    })
  }

  const addBy = () => {
    dispatch({
      type: 'ADD10',
      payload: 10
    })
  }

  return (
    <div className="App">
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
      <button onClick={addBy}>Add By 10</button>
    </div>
  );
}

export default App;
