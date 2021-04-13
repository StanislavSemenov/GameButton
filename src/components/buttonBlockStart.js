import React from 'react';
import '../Styles.css'


const ButtonBlockStart = ({ size }) => {

  let arrayButton = []
  for (let i = 1; i <= Math.pow(size, 2); i++) {
    arrayButton[i] = i
  }


  return (
    <div className='App' >
      {
        arrayButton.map(arrayButton =>
          (<button className='button'>{arrayButton}</button>)
        )
      }

    </div >
  )
}

export default ButtonBlockStart;
