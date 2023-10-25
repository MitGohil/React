export const Incnumber = () => {
    return {
        type: "INCREMENT"
    }
}
export const Decnumber = () => {
    return {
        type: "DECREMENT"
    }
}

export const text = () => {
    return {
        type: "TEXT"
    }
}

export const bg = (color) => {
    return {
        type: "DARK",
        payload: "color"
    }
}