import './App.css';
import React, { useState, useEffect } from 'react'
import Landing from './components/Landing';
import Question from './components/Question';

function App() {

  const [mode, setMode] = useState('landing')

  useEffect(() => {
    setMode('landing')
  }, [])

  function handleStartGame() {
    setMode('question')
  }

  return (
    <div className="App">
      <h1>{mode}</h1>
      {(mode === 'landing') ?
        <Landing handler={handleStartGame} /> :
        <Question />
      }

    </div>
  );
}

export default App;
