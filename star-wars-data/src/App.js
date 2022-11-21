import './App.css';
import React, { useState, useEffect } from 'react'

function App() {

  const apiLink = 'https://swapi.dev/api/people/'
  const [starWarsData, setStarWarsData] = useState({})
  const [count, setCount] = useState(0)

  function btnHandler() {
    setCount((prev) => prev + 1)
  }

  useEffect(() => {
    console.log("effect rendered")
    fetch(`${apiLink}/${count}/`)
      .then(res => res.json())
      .then(data => setStarWarsData(data))
  }, [count])

  return (
    <div className="App">
      <p>The count is {count}</p>
      <button onClick={btnHandler}>Get Next Character</button>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  );
}

export default App;
