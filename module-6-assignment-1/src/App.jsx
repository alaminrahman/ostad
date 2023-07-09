import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header.jsx'
import Content from './components/Content/Content.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {

  return (
    <>
      <Header classes="text-center bg-dark text-white py-3 px-5" text="Module - 6, Assignment - 1" />
      <Content />
      <Footer classes="text-center bg-dark fixed-bottom text-white py-3 px-5" text="Leader don't create followers, they create more leaders!" />
    </>
  )
}

export default App
