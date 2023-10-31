const Chnagetext = (state = "Hi", action) => {
    switch (action.type) {
        case "TEXT":
            return "Mitesh";
        default:
            return state
    }
}

export default Chnagetext