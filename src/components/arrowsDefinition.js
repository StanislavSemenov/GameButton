import React from 'react';
import { RandomGenerator } from './randomGenerator';
import { ButtonStrokeCalculation } from './buttonStrokeCalculation';
import ButtonBlockFinish from './buttonBlockFinish';
import ButtonBlockStart from './buttonBlockStart';
import ArrowBlock from './arrowBlock';


const ArrowsDefinition = () => {

    const size = 3 //адаптировать под входной параметр
    const arrowQuantity = 10 //адаптировать под входной параметр
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
                {/* {<ButtonBlockFinish
                    size={size}
                    buttonStart={buttonStart}
                    buttonStep={buttonStep}
                    arrayArrow={arrayArrow}
                />} */}
            </div>
            <div>
                {/*   <ButtonBlockStart size={size} /> */}
            </div>

            <div>
                <ArrowBlock arrayArrow={arrayArrow} />
            </div>

        </div >
    )
}


export default ArrowsDefinition
