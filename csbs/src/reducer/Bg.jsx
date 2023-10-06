const Changebg = (state = null, action) => {
    switch (action.type) {
        case "DARK": return { ...state, 'background color': "blue" }
        default: return state
    }
}
export default Changebg