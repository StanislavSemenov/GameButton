import React from 'react';

const ButtonBlock = (size) => {
  let buttonQuantity = Math.pow(size, 2)// адаптировать для ввода props

  const buttons = []
  for (let i = 0; i < buttonQuantity; i++) {
    buttons[i] = <button className="button"></button>
  }
  return buttons
}


export default ButtonBlock;
