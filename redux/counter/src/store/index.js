// put all React state here
import { legacy_createStore } from 'redux'

// reducer
// assign initial state 
const reducerFunc = (state = { counter: 0 }, action) => {

}

const store = legacy_createStore(reducerFunc)
export default store