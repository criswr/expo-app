import { SELECTED_NOTE, ADD_NOTE, EDIT_NOTE, DELETE_NOTE, LOAD_NOTES } from "../actions/notes.action";


const initialState = {
    notes: [],
    selected: null
}

const NotesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECTED_NOTE:
            return {...state, selected: state.notes.find(item => item.value === action.noteValue)}

        case ADD_NOTE:
            const newNote = {value: action.noteValue, timestamp: action.noteTimestamp, location: action.noteLocation}
            const updatedNotes = [...state.notes, newNote]
            return {...state, notes: updatedNotes}

        case EDIT_NOTE:
            const editedNote = {value: action.noteValue, timestamp: action.noteTimestamp, location: action.noteLocation}
            const filteredNotes = state.notes.filter(item => item.value !== state.selected.value)
            return {...state, notes: [...filteredNotes, editedNote]}

        case DELETE_NOTE:
            const nonDeletedNotes = state.notes.filter(item => item.value !== state.selected.value)
            return {...state, notes: nonDeletedNotes}

        case LOAD_NOTES:
            return {...state, notes: action.storedNotes.map(item => ({
                value: item.value, 
                timestamp: item.timestamp, 
                location: item.locationLat ? {lat: item.locationLat, lng: item.locationLng} : null
            }))}

        default:
            return state
    }
}

export default NotesReducer