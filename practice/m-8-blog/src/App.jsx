import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'

function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element = { <Home />} />
          <Route path="/about/:id/:type" element = { <About />} />
          <Route path="*" element = { <NotFound />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
