export const SELECTED_NOTE = 'SELECTED_NOTE'
export const ADD_NOTE = 'ADD_NOTE'

export const selectedNote = value => ({
    type: SELECTED_NOTE,
    noteValue: value
})

export const addedNote = (value, location) => {
    const getCurrentDate = (separator='-') => {
        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        
        return `${date}${separator}${month<10?`0${month}`:`${month}`}${separator}${year}`
    }

    return ({
        type: ADD_NOTE,
        noteValue: value,
        noteTimestamp: getCurrentDate(),
        noteLocation: location
    })
}