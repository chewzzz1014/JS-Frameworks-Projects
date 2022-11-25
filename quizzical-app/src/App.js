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
      {(mode === 'landing') ?
        <Landing handler={handleStartGame} /> :
        <Question />
      }
      <div className='decoration'></div>

    </div>
  );
}

export default App;
