const userReducer = (state = {}, action) => {
    switch(action.type) {
        case "ADD_USER":
            const users = state.users.concat(action.payload);
            return {...state, users};
        default:
            return state;
        }
}

export default userReducer;