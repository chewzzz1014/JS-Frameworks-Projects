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
    <div className="App">
      <Editor
        text={text}
        handleTextChange={handleTextChange}
      />
      <Previewer
        text={text}
      />
    </div>
  );
}

export default App;
