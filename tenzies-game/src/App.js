import './App.css';
import React, { useStare } from 'react'
import Number from './components/Number';

function App() {
  return (
    <div className="App">
      <main>

        <div className='text-section'>
          <h1>Tenzies</h1>
          <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        </div>

        <div className='number-section'>
          <div className='number-row-1'>
            <Number />
            <Number />
            <Number />
            <Number />
            <Number />
          </div>
          <div className='number-row-2'>
            <Number />
            <Number />
            <Number />
            <Number />
            <Number />
          </div>
        </div>

        <div className='roll-btn-section'>
          <button className='roll-btn'>Roll</button>
        </div>

      </main>
    </div>
  );
}

export default App;
