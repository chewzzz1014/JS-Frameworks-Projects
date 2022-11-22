import './style.css';

import React, { useState } from 'react';
import Header from './components/Header'
import Main from './components/Main'

// a react component that returns JSX
// render JSX at root
// JSC only return a single parent element (others are nested inside the parent)

function App() {

  const [darkMode, setDarkMode] = useState(true)

  function toogleDarkMode() {
    console.log('hihih')
    setDarkMode(prev => !prev)
  }

  return (
    < div >
      <Header darkMode={darkMode} toogleDarkMode={toogleDarkMode} />
      <Main darkMode={darkMode} />
    </div >
  )
}


export default App;
