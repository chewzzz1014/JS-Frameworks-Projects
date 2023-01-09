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
                counter: state.counter + 1
            }
        case 'DESC':
            return {
                counter: state.counter - 1
            }
        case 'ADD10':
            return {
                counter: state.counter + 10
            }
    }

    return state
}

const store = createStore(reducerFunc)
export default store