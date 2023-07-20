import { useState } from 'react'
import './App.css'
import ToggleSwitch from './components/ToggleSwitch';

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

        <ToggleSwitch />

    </>
  )
}

export default App
