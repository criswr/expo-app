export const SELECTED_NOTE = 'SELECTED_NOTE'

export const selectedNote = value => ({
    type: SELECTED_NOTE,
    noteValue: value
})