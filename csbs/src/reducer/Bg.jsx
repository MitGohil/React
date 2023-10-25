const initialstate = {backgroundColor:"white"}
const Changebg = (state = initialstate, action) => {
    switch (action.type) {
        case "DARK": return { ...state, backgroundColor: action.payload }
        default: return state
    }
}
export default Changebg