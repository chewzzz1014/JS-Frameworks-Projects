// put all React state here
import { createStore } from 'redux'

// reducer
// assign initial state 
const reducerFunc = (state = { counter: 0 }, action) => {
    // synchronous function
    // must not mutate the original state

    switch (action.type) {
        case 'INC':
            return {
                state: state.counter + 1
            }
    }

    return state
}

const store = createStore(reducerFunc)
export default store