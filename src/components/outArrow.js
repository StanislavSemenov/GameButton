import React from 'react';
import left from './image/left.png'
import right from './image/right.png'
import top from './image/top.png'
import down from './image/down.png'
import '../Styles.css'

export const OutArrow = ({ i, arrow }) => {

    let step = i + 1
    switch (arrow) {

        case 1:
            return <div>шаг {step}:{' '}< img alt="стрелка" src={top} className='arrow' /></div>
        case 2:
            return <div>шаг {step}:{' '}< img alt="стрелка" src={right} className='arrow' /></div>
        case 3:
            return <div>шаг {step}:{' '}< img alt="стрелка" src={down} className='arrow' /></div>
        case 4:
            return <div>шаг {step}:{' '}< img alt="стрелка" src={left} className='arrow' /></div>

        default: return null
    }


}