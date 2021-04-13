import { RandomGenerator } from './randomGenerator';
import { ActionCreatorButton } from './actionCreator';

export const ButtonStrokeCalculation = (currentButton, size) => {

    let key = true
    const buttonArrow = {
        button: null,
        arrow: null
    }

    while (key) {

        buttonArrow.arrow = RandomGenerator(4)

        if ((buttonArrow.arrow === 1) && currentButton > size) (key = false)
        else
            if ((buttonArrow.arrow === 2) && (currentButton % size !== 0)) (key = false)
            else
                if ((buttonArrow.arrow === 3) && (currentButton <= Math.pow(size, 2) - size)) (key = false)
                else
                    if ((buttonArrow.arrow === 4) && (currentButton + size - 1) % size !== 0) (key = false)

    }
    (buttonArrow.button = ActionCreatorButton(currentButton, buttonArrow.arrow, size))

    return buttonArrow
}
