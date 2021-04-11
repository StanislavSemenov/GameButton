import React from 'react';
import buttonBlock from './buttonBlock';
import { RandomGenerator } from './randomGenerator';
import { ButtonStrokeCalculation } from './buttonStrokeCalculation';




const ArrowsDefinition = () => {

    let size = 3
    let arrayArrow = []
    let arrayButtonArrow = []
    let buttonStart = RandomGenerator(Math.pow(size, 2))//ген-я кнопка старта
    let step = 0
    let buttonStep = buttonStart

    for (let i = 0; i < 10; i++) {
        arrayButtonArrow[i] = ButtonStrokeCalculation(buttonStep, size)
        buttonStep = arrayButtonArrow[i].button
        arrayArrow[i] = arrayButtonArrow[i].arrow
        step++
        console.log(arrayButtonArrow)
    }

    return < div >
        <h3>buttonStart={buttonStart}</h3>
        <h3>buttonFinish={buttonStep}</h3>
        <h3> arrayArrow={arrayArrow}</h3>

        <h3>steps={step}</h3>
    </ div >


}

export default ArrowsDefinition
