import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Home from "./components/Home"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route
        path='/'
        element={<Home />}
      />
    </Routes>
  </Router>
)
