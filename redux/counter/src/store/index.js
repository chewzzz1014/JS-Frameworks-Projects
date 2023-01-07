// put all React state here
import { createStore } from 'redux'

// reducer
// assign initial state 
const reducerFunc = (state = { counter: 0 }, action) => {
    return state
}

const store = createStore(reducerFunc)
export default store