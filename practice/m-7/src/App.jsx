import { useState } from 'react'
import './App.css'

function App() {

  const [para, setPara] = useState({
    text: "",
    warning: ""
  });

  function handlleClick(event) {

    if(event.target.value.includes("js")){
      setPara((previousState) => {
        return {
          ...previousState,
          warning: "You are a boss"
          
        }
      })
    }

    setPara((previousState) => {
      return {
        ...previousState,
        text: event.target.value
        
      }
    })
    
   
  }

  return (
    <>

      <p>Input text : { para.text }</p>
      <p>{ para.warning }</p>

      <input
        type="text"
        value={ para.text }
        onChange={ handlleClick } />

    </>
  )
}

export default App
