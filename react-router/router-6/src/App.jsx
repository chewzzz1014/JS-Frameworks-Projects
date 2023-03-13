import Home from "./Home"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router className="App">
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
      </Routes>
    </Router>
  )
}

export default App
