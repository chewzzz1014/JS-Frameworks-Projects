import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  return (
    <div className='App container-sm px-3 px-md-5 mt-3 mb-3'>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App