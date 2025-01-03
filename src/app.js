import React from 'react'
import ReactDOM from "react-dom/client"
import Accordion from './Accordion/Accordion'

const App = () => {
  return (
    <Accordion/>
  )
}

const root = ReactDOM.createRoot(document.querySelector("#root"))
root.render(<App/>)