const initialState = {users : []}


function usersDetails(state = initialState, action) {
    let userState
    switch (action.type) {
        case 'USERS_DETAILS':
            return userState
       default:
           return state
    }
}

export default usersDetails