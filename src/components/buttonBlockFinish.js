import React from 'react';
import '../Styles.css'


const ButtonBlockFinish = ({ size, buttonStart, buttonStep, arrayArrow }) => {

  let arrayButton = []
  for (let i = 1; i <= Math.pow(size, 2); i++) {
    arrayButton[i] = i
  }


  return (
    <div className='App' >
      {
        arrayButton.map(arrayButton =>
          (arrayButton === buttonStep && buttonStep === buttonStart &&
            <button className='buttonStartFinish'>
              <div>Start-Finish</div>
            </button>) ||
          (arrayButton === buttonStart && <button className='buttonStart' >Start</button>) ||
          (arrayButton === buttonStep && <button className='buttonFinish'>Finish</button>) ||
          (<button className='button'>{arrayButton}</button>)
        )
      }
      <div>arrayArrow={arrayArrow} buttonStart={buttonStart} buttonFinish={buttonStep}</div>
    </div >
  )
}

export default ButtonBlockFinish;
