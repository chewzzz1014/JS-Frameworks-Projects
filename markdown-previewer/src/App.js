import './App.css';
import './index.css'
import Editor from './components/Editor';
import Previewer from './components/Previewer';
import { useState } from 'react';

function App() {

  const [text, setText] = useState('')

  function handleTextChange({ target }) {
    console.log(target.value)
    setText(target.value)
  }

  return (
    <div className="App flex flex-col justify-center items-center h-screen v-screen"
    >
      <div className='border-2 border-red-200 container flex flex-col justify-center items-center'>
        <Editor
          text={text}
          handleTextChange={handleTextChange}
        />
        <Previewer
          text={text}
        />
      </div>
    </div>
  );
}

export default App;
