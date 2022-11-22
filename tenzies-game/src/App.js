import './App.css';
import React, { useStare } from 'react'
import Number from './components/Number';
import Die from './components/Die';

function App() {
  return (
    <div className="App">
      <main>

        <div className='text-section'>
          <h1>Tenzies</h1>
          <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        </div>

        <Die />

        <div className='roll-btn-section'>
          <button className='roll-btn'>Roll</button>
        </div>

      </main>
    </div>
  );
}

export default App;
