import React from 'react';
import '../Styles.css'
import { useState } from 'react';

const ButtonBlockFinish = ({ size, buttonStart, buttonFinish }) => {

  let arrayButton = []
  for (let i = 1; i <= Math.pow(size, 2); i++) {
    arrayButton[i] = i
  }

  const [s, setS] = useState(false)

  return (
    <div >
      {!s &&
        <button className='finish' onClick={() => setS(s => !s)}>
          Показать кнопку финиш
        </button>
      }
      <div className='App' >
        {s && arrayButton.map((arrayButton, i) =>
          (arrayButton === buttonFinish && buttonFinish === buttonStart &&
            <button key={i} className='buttonStartFinish'>
              <div >Старт и Финиш</div>
            </button>) ||
          (arrayButton === buttonStart && <button key={i} className='buttonStart' >Start</button>) ||
          (arrayButton === buttonFinish && <button key={i} className='buttonFinish'>Finish</button>) ||
          (<button key={i} className='button'>{arrayButton}</button>)
        )}
      </div >
    </div >
  )
}

export default ButtonBlockFinish;
