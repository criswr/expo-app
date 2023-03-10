import { fetchNotes, insertNote } from "../../../db"

export const SELECTED_NOTE = 'SELECTED_NOTE'
export const ADD_NOTE = 'ADD_NOTE'
export const EDIT_NOTE = 'EDIT_NOTE'
export const DELETE_NOTE = 'DELETE_NOTE'
export const LOAD_NOTES = 'LOAD_NOTES'


const getCurrentDate = (separator='-') => {
    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    
    return `${date}${separator}${month<10?`0${month}`:`${month}`}${separator}${year}`
}

export const selectedNote = value => ({
    type: SELECTED_NOTE,
    noteValue: value
})

export const addedNote = (value, location) => {
    const result = insertNote(value, getCurrentDate(), location ? location.lat : null, location ? location.lng : null)
    console.log('added', result)
    return ({
        type: ADD_NOTE,
        noteValue: value,
        noteTimestamp: getCurrentDate(),
        noteLocation: location
    })
}

export const editedNote = (value, location) => {
    return ({
        type: EDIT_NOTE,
        noteValue: value,
        noteTimestamp: getCurrentDate(),
        noteLocation: location
    })
}

export const deletedNote = () => {
    return ({
        type: DELETE_NOTE,
    })
}

export const loadNotes = () => {
    return async dispatch => {
        try {
            const result = await fetchNotes()
            console.log('SQLNOTES:', result.rows._array)
            dispatch({
                type: LOAD_NOTES,
                storedNotes: result.rows._array
            })
        }
        catch (err) {console.log(err)}
    }
}