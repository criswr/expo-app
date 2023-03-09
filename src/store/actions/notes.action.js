export const SELECTED_NOTE = 'SELECTED_NOTE'
export const ADD_NOTE = 'ADD_NOTE'
export const EDIT_NOTE = 'EDIT_NOTE'


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