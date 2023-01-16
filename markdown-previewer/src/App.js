import './App.css';
import './index.css'
import Editor from './components/Editor';
import Previewer from './components/Previewer';

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <Editor />
      <Previewer />
    </div>
  );
}

export default App;
