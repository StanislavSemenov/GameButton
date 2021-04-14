import React from 'react';
import { RandomGenerator } from './randomGenerator';
import { ButtonStrokeCalculation } from './buttonStrokeCalculation';
import ButtonBlockStart from './buttonBlockStart';
import { ArrowBlock } from './arrowBlock';


const ArrowsDefinition = ({ size = 3, arrowQuantity = 10 }) => {
    debugger
    let arrayArrow = []
    let arrayButtonArrow = []
    let buttonStart = RandomGenerator(Math.pow(size, 2))//ген-я кнопка старта   
    let buttonStep = buttonStart

    //расчет кнопки финиш
    for (let i = 0; i < arrowQuantity; i++) {
        arrayButtonArrow[i] = ButtonStrokeCalculation(buttonStep, size)
        buttonStep = arrayButtonArrow[i].button
        arrayArrow[i] = arrayButtonArrow[i].arrow

    }

    return (
        <div>
            <div>
                <ButtonBlockStart
                    size={size}
                    buttonStart={buttonStart}
                />
            </div>
            <div>
                <ArrowBlock
                    size={size}
                    buttonStart={buttonStart}
                    buttonStep={buttonStep}
                    arrayArrow={arrayArrow}
                />
            </div>



        </div >
    )
}


export default ArrowsDefinition
