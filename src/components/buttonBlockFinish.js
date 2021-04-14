import React from 'react';
import '../Styles.css'


const ButtonBlockFinish = ({ size, buttonStart, buttonStep }) => {

  let arrayButton = []
  for (let i = 1; i <= Math.pow(size, 2); i++) {
    arrayButton[i] = i
  }


  return (
    <div className='App' >
      {
        arrayButton.map((arrayButton, i) =>
          (arrayButton === buttonStep && buttonStep === buttonStart &&
            <button key={i} className='buttonStartFinish'>
              <div >Start-Finish</div>
            </button>) ||
          (arrayButton === buttonStart && <button key={i} className='buttonStart' >Start</button>) ||
          (arrayButton === buttonStep && <button key={i} className='buttonFinish'>Finish</button>) ||
          (<button key={i} className='button'>{arrayButton}</button>)
        )
      }
    </div >
  )
}

export default ButtonBlockFinish;
