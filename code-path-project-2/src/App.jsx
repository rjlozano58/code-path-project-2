import { useState } from 'react'
import './App.css'
import Card from './components/Card.jsx'
import $ from 'jquery';


function App() {
  const [count, setCount] = useState(0);
  const [toggle,setToggle] = useState(0);
  const [currQuestion,setQuestion] = useState(0);
  const [rand,setRand] = useState(0);

  const data = [
    ["Who is the super hero that wears a metal suit?","Iron Man"],
    ["Who is the God of Thunder?","Thor"],
    ["What super hearo hold the \"Laso of truth\"?","Wonder Woman"],
    ["Who is Vengeance?","Batman"],
    ["Who is the super hero that has claws and has super human regeneration?","Wolverine"]

  ]

  function generateRandomNum(){

  }

  function toggleAnswer(){
    if (toggle === 0){
      setToggle(1);
    }else{
      setToggle(0);
    }
  }

 
  function updateRandomNumber(){
    let oldRand = rand;
    let newRand = Math.floor(Math.random() * 5);
    while(oldRand == newRand){
      newRand = Math.floor(Math.random() * 5);
    }
    
    setRand(newRand);
  }

  return (

    <>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/1280px-Marvel_Logo.svg.png"/>
     <h1 className='title'>TRIVIA</h1>

        <Card front={data[rand][0]} back={data[rand][1]} />

      <div className='button-container'>
        <button onClick={updateRandomNumber}> Next Question</button>
      </div>


    </>
  )
}

export default App
