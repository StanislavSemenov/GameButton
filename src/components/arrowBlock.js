import React, { useState, useEffect } from "react";
import { OutArrow } from "./outArrow";
import ButtonBlockFinish from './buttonBlockFinish';
import '../Styles.css'

export const ArrowBlock = ({ size, buttonStart, buttonStep, arrayArrow, ms = 1000 }) => {

  const [count, setCount] = useState(1);

  useEffect(() => {
    if (count <= arrayArrow.length) {
      setTimeout(() => {
        setCount((count) => count + 1);
      }, ms);
    }
  }, [count]);

  const arrayArrowToDisplay = arrayArrow.slice(0, count);

  return (
    <>
      <div className='arrowBlock'>
        {arrayArrowToDisplay.map((arrow, i) => (

          < OutArrow
            key={i}
            i={i}
            arrow={arrow}
          />
        ))}
      </div>

      {count >= arrayArrow.length &&
        <div>
          <ButtonBlockFinish
            size={size}
            buttonStart={buttonStart}
            buttonFinish={buttonStep}
          />
        </div>
      }
    </>
  );
};
