import { UserActionTypes } from '../constants/actionTypes';


let initialState = {
    users: [],
    loggedOnUser: {},
    loading: true,
    error: '',
    success: ''
};

const userReducer = (state = initialState, action) => {
    //debugger;
    switch (action.type) {
        case UserActionTypes.loginUserSuccess:
            return {
                ...state,
                loggedOnUser: action.payload
            }
        case UserActionTypes.loginUserFailure:
            return {
                ...state,
                loggedOnUser: {}
            }
        case UserActionTypes.fetchUserSuccess:
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        case UserActionTypes.fetchUserFailure:
            return {
                ...state,
                users: [],
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
};

export default userReducer;