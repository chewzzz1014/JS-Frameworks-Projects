const reducer = (posts = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            // return posts
            return action.payload
        case 'CREATE':
            return [
                ...posts,
                action.payload
            ]
        case 'UPDATE':
        case 'LIKE':
            return posts.map(p =>
                p._id === action.payload._id ? action.payload : p
            )
        case 'DELETE':
            return posts.filter(p => p._id !== action.payload)
        default:
            return posts
    }
}

export default reducer