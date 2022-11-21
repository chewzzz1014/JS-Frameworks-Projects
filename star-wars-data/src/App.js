import './App.css';
import React, { useState, useEffect } from 'react'

function App() {

  const apiLink = 'https://swapi.dev/api/people/1/'
  const [starWarsData, setStarWarsData] = useState({})

  return (
    <div className="App">
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  );
}

export default App;
