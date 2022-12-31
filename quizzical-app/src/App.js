import './App.css';
import React, { useState, useEffect } from 'react'
import Landing from './components/Landing';
import GameMode from './components/GameMode';

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
      {(mode === 'landing') ?
        <Landing handler={handleStartGame} /> :
        <GameMode />
      }

    </div>
  );
}

export default App;
