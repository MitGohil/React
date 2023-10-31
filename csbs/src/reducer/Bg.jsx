const initialstate = { color: "white" };
const Changebg = (state = { initialstate }, action) => {
    switch (action.type) {
        case "CHANGE_BG":
            // return { color: "#" + Math.random().toString(16).slice(2, 8) };
            return { color: "#532532" };
        case "RESET_BG":
            return { color: '#ffffff' };
        default:
            return state;
    }
}
export default Changebg