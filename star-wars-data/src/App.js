import './App.css';
import React, { useState, useEffect } from 'react'

function App() {

  const apiLink = 'https://swapi.dev/api/people/1/'
  const [starWarsData, setStarWarsData] = useState({})
  const [count, setCount] = useState(0)

  function btnHandler() {
    setCount((prev) => prev + 1)
  }

  useEffect(() => {
    console.log("effect rendered")
    fetch(apiLink)
      .then(res => res.json())
      .then(data => setStarWarsData(data))
  }, [count])

  return (
    <div className="App">
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
      <p>The count is {count}</p>
      <button onClick={btnHandler}>Add</button>
    </div>
  );
}

export default App;
