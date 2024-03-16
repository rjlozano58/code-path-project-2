import { useState } from 'react'
import './App.css'
import Card from './components/Card.jsx'
import $ from 'jquery';


function App() {

  const [curr,setCurr] = useState(0);
  const [rand,setRand] = useState(0);
  const [guess,setGuess] = useState("");
  const [result,setResult] = useState("");

  const data = [
    ["Who is the Avenger that wears an armored exoskeleton?","Iron Man","Easy"],
    ["Who is the God of Thunder?","Thor","Easy"],
    ["How many Infinity Stones are there?","6","Medium"],
    ["Who is Tony Stark's Father?","Howard Stark","Medium"],
    ["Who is the super hero that has claws and has super human regeneration?","Wolverine","Medium"],
    ["What type of doctor is Doctor Strange?","Neurosurgeon","Medium"],
    ["What is Captain America's sheild made of?","Vibranium","Medium"],
    ["What are Wolverine's Claws made of?","Adamantium","Hard"],
    ["Black Panther is set in which fictional country?","Wakanda","Medium"],
    ["Nick Fury wears an eye patch over which eye?","His left eye","Hard"],
    ["What color is Black Widow's hair?","Red","Medium"],
    ["Thor's Mjolnir is made from the metal of a dying ___?","Star","Hard"],
    ["Who is Scott Lang?","Ant-Man","Hard"],
    ["Which movie kicked off the Marvel Cinematic Universe?","Iron Man","Hard"],
    ["Which Avenger loves to SMASH","Hulk","Easy"],
    ["What is the name of Thor's hammer?","Mjölnir","Hard"],
    ["What is the name of Thor's Fathers?","Odin","Medium"],
    ["Tony Stark's daughter says to him, \"I love you ___ \" ", "3000","Maybe Hard"],
    ["What is the name of Thor's Sister?","Hela","Medium"],
    ["What is the name of Thor's Brother?","Loki","Easy"],
    ["(true or false) Loki is NOT Thor's biological brother?","True","Easy"],
    ["How many heros are in the Guardian of the Galaxy?","5","Easy"],
    ["When Iron Man arrives back to the US after being in captivity, what is his firt meal?","Cheeseburger","Hard"],
    ["Who said, \"With great power comes great responsibility\" ", "Uncle Ben","Easy"],
    ["Which two actors played Spider-Man before Tom Holland?","Toby Maguire and Andrew Garfield","Hard"],
    ["Who was Doctor Strange’s mentor?","The Ancient One","Hard"],
    ["Where is Captain America from?","Brooklyn, New York City","Medium"],
    ["What is Captain America's name?","Steve Rodgers","Easy"],
    ["What did Steve Rodgers put in his shoes to make him taller (pre-super-soldier)", "Newspaper","Hard"],
    ["What is the name of the Avenger's aircraft","The Quinjet","Medium"],
    ["Who is the leader of shield?", "Nick Fury","Easy"],
    ["How does Peter Parker become Spider-man?","Gets bit by a radioactive spider","EZPZ"],
    ["Who was the main villain in Captain America: The First Avenger?","Red Skull","Medium"],
    ["In the MCU, which villain is trying to get all the Infinity Stones?","Thanos","Medium"],
    ["(true or false) Iron Man dies in Avengers: Infinity War?","False (He dies in Avenger: Endgame)","Easy"]

  ]

  const change = event =>{
    let newValue = event.target.value;
    setGuess(newValue);
  }

  const checkAnswer = () =>{
    if (data[rand][1].toLowerCase() === guess.toLowerCase()){
      setResult("Correct!");
    }else{
      setResult("Incorrect!");
    }

  }

  function next(){
    if (curr === data.length){
      setCurr(0);
    }else{
      setCurr(curr + 1);
    }

    setResult("");
    setGuess("");
  }

  function prev(){
    if (curr === 0){
      setCurr(data.length);
    }else{
      setCurr(curr - 1);
    }

    setResult("");
    setGuess("");
  }
 
  function updateRandomNumber(){
    let oldRand = rand;
    let newRand = Math.floor(Math.random() * data.length);
    while(oldRand == newRand){
      newRand = Math.floor(Math.random() * data.length);
    }
    
    setRand(newRand);
    setCurr(rand);
    setResult("");
    setGuess("");
  }


  return (

    <>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/1280px-Marvel_Logo.svg.png"/>
    <h1 className='title'>TRIVIA</h1>
    <h2 className='short-description'> Test just how much of a Marvel fan you are! These questions will range in difficulty from easy to medium to hard. Hold Down card to reveal answer. Good Luck;)</h2>
    <h2 className='short-description'> Number of cards: {data.length}</h2>

    <Card front={data[curr][0]} difficulty={data[curr][2]} back={data[curr][1]} />

    <h3 className='result-text'>{result}</h3>

    <div className='input-container'>
      <input value={guess} onChange={change} className="input-text" type='text'></input>
      <button onClick={checkAnswer} className='submit-button'>Submit Guess</button>
    </div>
    <div className='button-container'>
      <button onClick={prev}>Prev</button>
      <button onClick={next}>Next</button>
      <button onClick={updateRandomNumber}> Shuffle</button>
    </div>

    </>
  )
}

export default App
