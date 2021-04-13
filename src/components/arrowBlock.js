import React, { cloneElement } from 'react';
import '../Styles.css'
import { OutArrow } from './outArrow';


const ArrowBlock = ({ arrayArrow, ms = 2000 }) => {


  let current = 0;
  let setOutIntervalArrow = setInterval(() => {
    console.log(arrayArrow[current])
    current++
    if (current >= arrayArrow.length) clearInterval(setOutIntervalArrow)
    return OutArrow(arrayArrow[current])

  }, ms);
  return <div>Hello</div>;
}
export default ArrowBlock;
