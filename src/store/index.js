import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

import NotesReducer from "./reducers/notes.reducer";


const RootReducer = combineReducers({
    notes: NotesReducer,
})

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

export default createStore(RootReducer, composedEnhancer)