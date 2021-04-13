
export const ActionCreatorButton = (button = null, arrow = null, size = null) => {

    let newButton = null

    switch (arrow) {

        case 1: newButton = button - size
            return newButton
        case 2: newButton = button + 1
            return newButton
        case 3: newButton = button + size
            return newButton
        case 4: newButton = button - 1
            return newButton

        default: return newButton
    }


}

