import { SELECTED_NOTE } from "../actions/notes.action";


const initialState = {
    notes: [
        {value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas convallis tempor tristique. Aliquam erat volutpat. Vivamus feugiat urna sed est semper, ullamcorper congue sapien interdum. Aenean sit amet lectus nisi. Vestibulum nec mi in libero vehicula fermentum. In aliquet maximus nulla, et scelerisque purus gravida vel. Phasellus vehicula mi porta accumsan suscipit. Aenean sodales turpis eu augue vulputate molestie. Nullam dignissim purus massa, a finibus erat congue quis. Curabitur ligula risus, blandit sollicitudin turpis sed, imperdiet molestie diam. Fusce sollicitudin commodo urna id ullamcorper. Donec nunc quam, viverra euismod quam ut, facilisis varius libero. Sed interdum, sapien vel aliquet mollis, ipsum quam iaculis lorem, vitae lobortis lacus mauris at urna.', timestamp: '01-01-2023'},
        {value: 'Etiam ac blandit risus, et laoreet lectus. Pellentesque iaculis mauris sit amet tellus molestie imperdiet. Sed quis purus nec dui varius facilisis. In tempor eu sapien vitae egestas. Donec ac fringilla nunc. Curabitur id finibus velit. Nunc sed consectetur quam, sit amet aliquet diam.', timestamp: '01-02-2023'},
        {value: 'Quisque consequat eu libero vitae pretium. Proin suscipit, velit eu elementum volutpat, velit enim lacinia enim, fermentum porttitor orci nulla nec leo. Duis in diam sed risus auctor scelerisque. Suspendisse at velit euismod, ornare dolor scelerisque, interdum dolor. Nullam dapibus, justo at ornare rutrum, dolor orci sagittis libero, id luctus nibh sem eu eros. Nulla sollicitudin, nulla vitae laoreet sagittis, ante nisi maximus ante, in efficitur tellus eros varius neque. Vestibulum id nulla vehicula, sagittis est eu, euismod ligula. Fusce feugiat sapien diam, pellentesque faucibus quam fringilla non. Duis ligula elit, tempus in sapien ut, consequat aliquam massa. Integer nec nibh quam. Donec laoreet nisl faucibus mi lobortis ultricies. Donec a pretium mi. Praesent porta arcu ac ligula dictum elementum. Quisque mollis dui elit, ac lacinia diam fermentum at. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce tristique nulla eget condimentum iaculis.', timestamp: '01-02-2023'}],
    selected: null
}

const NotesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECTED_NOTE:
            return {...state, selected: state.notes.find(item => item.value === action.noteValue)}
        default:
            return state
    }
}

export default NotesReducer