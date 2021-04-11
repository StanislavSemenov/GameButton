import React from 'react';
import { RandomGenerator } from './randomGenerator';

export const ButtonStrokeCalculation = (currentButton, size) => {

    const buttonArrow = {
        button: null,
        arrow: null
    }

    let key = true

    // левый столбец
    if ((currentButton + size - 1) % size == 0) {
        buttonArrow.arrow = RandomGenerator(4)

        while (key) {

            if (buttonArrow.arrow == 1 && currentButton !== 1) {
                buttonArrow.button = currentButton - size; key = false
            }
            else if (buttonArrow.arrow == 2) {
                buttonArrow.button = currentButton + 1; key = false
            }
            else if (buttonArrow.arrow == 3 && currentButton !== (Math.pow(size, 2) + 1 - size)) {
                buttonArrow.button = currentButton + size; key = false
            }
            else buttonArrow.arrow = RandomGenerator(4)
        }
        key = false
    }
    else
        // правый столбец
        if (currentButton % size == 0) {
            buttonArrow.arrow = RandomGenerator(4)

            while (key) {

                if (buttonArrow.arrow == 1 && currentButton !== size) {
                    buttonArrow.button = currentButton - size; key = false
                }
                else if (buttonArrow.arrow == 4) {
                    buttonArrow.button = currentButton - 1; key = false
                }
                else if (buttonArrow.arrow == 3 && currentButton !== Math.pow(size, 2)) {
                    buttonArrow.button = currentButton + size; key = false
                }
                else buttonArrow.arrow = RandomGenerator(4)
            }
            key = false

        } else
            // верхняя строка
            if (currentButton <= size) {
                buttonArrow.arrow = RandomGenerator(4)

                while (key) {

                    if (buttonArrow.arrow == 2 && currentButton !== size) {
                        buttonArrow.button = currentButton + 1; key = false
                    }
                    else if (buttonArrow.arrow == 3) {
                        buttonArrow.button = currentButton + size; key = false
                    }
                    else if (buttonArrow.arrow == 4 && currentButton !== 1) {
                        buttonArrow.button = currentButton - 1; key = false
                    }
                    else buttonArrow.arrow = RandomGenerator(4)
                }
                key = false
            }
            else
                // нижняя строка
                if (currentButton > Math.pow(size, 2) - size) {
                    buttonArrow.arrow = RandomGenerator(4)

                    while (key) {

                        if (buttonArrow.arrow == 2 && currentButton !== Math.pow(size, 2)) {
                            buttonArrow.button = currentButton + 1; key = false
                        }
                        else if (buttonArrow.arrow == 1) {
                            buttonArrow.button = currentButton - size; key = false
                        }
                        else if (buttonArrow.arrow == 4 && currentButton !== (Math.pow(size, 2) - size + 1)) {
                            buttonArrow.button = currentButton - 1; key = false
                        }
                        else buttonArrow.arrow = RandomGenerator(4)
                    }
                    key = false
                }
                else {
                    buttonArrow.arrow = RandomGenerator(4)
                    if (buttonArrow.arrow == 2) {
                        buttonArrow.button = currentButton + 1; key = false
                    }
                    else if (buttonArrow.arrow == 1) {
                        buttonArrow.button = currentButton - size; key = false
                    }
                    else if (buttonArrow.arrow == 4) {
                        buttonArrow.button = currentButton - 1; key = false
                    }
                    else if (buttonArrow.arrow == 3) {
                        buttonArrow.button = currentButton + size; key = false

                    }
                }



    return buttonArrow
}
