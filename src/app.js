import React from 'react'
import ReactDOM from "react-dom/client"
import Accordion from './Accordion/Accordion'
import RandomBgClrGenerator from './RandomBgClrGenerator/RandomBgClrGenerator'
import StarRating from './'

const App = () => {
  return (
    // <Accordion/>
    // <RandomBgClrGenerator/>
    <StarRating/>
  )
}

const root = ReactDOM.createRoot(document.querySelector("#root"))
root.render(<App/>)