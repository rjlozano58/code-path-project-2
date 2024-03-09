import { useState } from 'react'
import './App.css'
import Card from './components/Card.jsx'
import $ from 'jquery';


function App() {

  const [rand,setRand] = useState(0);

  const data = [
    ["Who is the Avenger that wears an armored exoskeleton?","Iron Man"],
    ["Who is the God of Thunder?","Thor"],
    ["How many Infinity Stones are there?","6"],
    ["Who is Tony Stark's Father?","Howard Stark"],
    ["Who is the super hero that has claws and has super human regeneration?","Wolverine"],
    ["What type of doctor is Doctor Strange?","Neurosurgeon"],
    ["What is Captain America's sheild made of?","Vibranium"],
    ["What are Wolverine's Claws made of?","Adamantium"],
    ["Black Panther is set in which fictional country?","Wakanda"],
    ["Nick Fury wears an eye patch over which eye?","His left eye"],
    ["What color is Black Widow's hair?","Red"],
    ["Thor's Mjolnir is made from the metal of a dying ___?","Star"],
    ["Who is Scott Lang?","Ant-Man"],
    ["Which movie kicked off the Marvel Cinematic Universe?","Iron Man"],
    ["Which Avenger loves to SMASH","Hulk"],
    ["What is the name of Thor's hammer?","Mjölnir"],
    ["What is the name of Thor's Fathers?","Odin"],
    ["Tony Stark's daughter says to him, \"I love you ___ \" ", "3000"],
    ["What is the name of Thor's Sister?","Hela"],
    ["What is the name of Thor's Brother?","Loki"],
    ["(true or false) Loki is NOT Thor's biological brother?","True"],
    ["How many heros are in the Guardian of the Galaxy?","5"],
    ["When Iron Man arrives back to the US after being in captivity, what is his firt meal?","A Cheeseburger"],
    ["Who said, \"With great power comes great responsibility\" ", "Uncle Ben"]
  ]

 
  function updateRandomNumber(){
    let oldRand = rand;
    let newRand = Math.floor(Math.random() * data.length);
    while(oldRand == newRand){
      newRand = Math.floor(Math.random() * data.length);
    }
    
    setRand(newRand);
  }

  return (

    <>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/1280px-Marvel_Logo.svg.png"/>
     <h1 className='title'>TRIVIA</h1>

        <Card front={data[rand][0]} back={data[rand][1]} />

      <div className='button-container'>
        <h1>{rand}</h1>
        <button onClick={updateRandomNumber}> Next Question</button>
      </div>


    </>
  )
}

export default App
