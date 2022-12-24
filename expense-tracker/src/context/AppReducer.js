// reducer will changes state
// cannot modify existing state

const reducer = (state, action) => {
    switch (action.type) {
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(t => t.id !== action.payload)
            }
        default:
            return state
    }
}

export default reducer