import logo from './logo.svg';
import './style.css';

import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header'
import Main from './components/Main'

// a react component that returns JSX
// render JSX at root
// JSC only return a single parent element (others are nested inside the parent)

function App() {
  return (
    < div >
      <Header />
      <Main />
    </div >
  )
}

ReactDOM.render(
  <App />,
  document.querySelector("#root")
);


export default App;
