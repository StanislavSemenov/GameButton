import React from 'react';
import '../Styles.css'


const ButtonBlockStart = ({ size, buttonStart }) => {

  let arrayButton = []
  for (let i = 1; i <= Math.pow(size, 2); i++) {
    arrayButton[i] = i
  }
  return (
    <div className='App' >
      Hello
      {
        arrayButton.map((arrayButton, i) =>

          (arrayButton === buttonStart && <button key={i} className='buttonStart' >Start</button>) ||
          (<button key={i} className='button'>{arrayButton}</button>))

      }

    </div >
  )
}

export default ButtonBlockStart;
