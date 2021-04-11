import React from 'react';

export const RandomGenerator = (props) => {
    //ген-я трелки(1-вверх, 2-вправо, 3-вниз, 4-влево)
    return Math.floor(Math.random() * props) + 1
}