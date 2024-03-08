import { useState } from 'react'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  const [count, setCount] = useState(0);
  const [randNum, setRand] = useState(0);

  function generateRandomNum(){

  }
  return (
    <>
     <h1>Know your super heros!</h1>

     <Card />

     <div className='button-container'>
        <button>Next Question</button>
      </div>

    </>
  )
}

export default App
