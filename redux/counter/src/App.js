import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from './store/index'

function App() {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  // dispatch action
  const increment = () => {
    // dispatch({
    //   type: 'INC',
    // })
    dispatch(actions.increment())
  }

  // dispatch action
  const decrement = () => {
    // dispatch({
    //   type: 'DESC'
    // })
    dispatch(actions.decrement())
  }

  const addBy = () => {
    // dispatch({
    //   type: 'ADD',
    //   payload: 10
    // })
    dispatch(actions.addBy(10))
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
