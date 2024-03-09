import { useState } from 'react'
import React from 'react'
import '../App.css'



const Card = (props) => {
    return(

        <div className='card-flip-container'>
            <div className='card'>
                <div className='front-card'>
                    <h3>{props.front}</h3>
                    <h3>{props.difficulty}</h3>
                </div>

                <div className='back-card'>
                    <h3>{props.back}</h3>
                </div>
            </div>

        </div>

    )
}

export default Card;