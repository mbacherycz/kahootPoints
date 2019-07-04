const initialState = {
    exampleMessage: 'other reducer message',
    counter: 0
}

const otherExampleReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'OTHER':
            console.log(state.counter)
            return {
                ...state,
                counter: state.counter + 1
            }
        default:
            return state
    }
}

export default otherExampleReducer;