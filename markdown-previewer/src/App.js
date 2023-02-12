import './index.css'
import Editor from './components/Editor';
import Previewer from './components/Previewer';
import { useState } from 'react';

function App() {

  const [text, setText] = useState('')
  const [isFull, setIsFull] = useState([false, false])

  function handleTextChange({ target }) {
    console.log(target.value)
    setText(target.value)
  }

  return (
    <div className="App"
    >
      <div className='border-2 border-red-200'>
        {!isFull[1] &&
          <Editor
            text={text}
            handleTextChange={handleTextChange}
            isFull={isFull}
            setIsFull={setIsFull}
            idx={0}
          />}

        {!isFull[0] &&
          <Previewer
            text={text}
            isFull={isFull}
            setIsFull={setIsFull}
            idx={1}
          />
        }

      </div>
    </div>
  );
}

export default App;
