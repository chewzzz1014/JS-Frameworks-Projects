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
    <div className="App"
    >
      <div className='border-2 border-red-200'>
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
