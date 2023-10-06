import { combineReducers } from "redux";
import Changenumber from "./Changenumber";
import Chnagetext from "./Changetext";
import Changebg from "./Bg";
const rootreducer = combineReducers({
    Changenumber, Chnagetext, Changebg
}
)
export default rootreducer