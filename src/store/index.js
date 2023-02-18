import { createStore, combineReducers } from "redux";

import NotesReducer from "./reducers/notes.reducer";


const RootReducer = combineReducers({
    notes: NotesReducer,
})

export default createStore(RootReducer)