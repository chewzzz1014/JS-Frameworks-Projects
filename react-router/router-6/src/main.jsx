import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Home from "./components/Home"
import Courses from './components/Courses'
import Bundles from './components/Bundles'
import Learn from './components/Learn'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route
        path='/'
        element={<Home />}
      />

      <Route
        path='/myapps'
        element={<Navigate replace to='/learn' />}
      />

      {/* /learn, /learn/course, /learn/bundle */}
      <Route
        path='/learn'
        element={<Learn />}
      >
        <Route
          path='courses'
          element={<Courses />}
        />
        <Route
          path='bundles'
          element={<Bundles />}
        />
      </Route>
    </Routes>
  </Router>
)
