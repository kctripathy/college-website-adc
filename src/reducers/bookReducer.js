import { BookActionTypes } from '../constants/actionTypes';


let initialState = {
    books: [],
    count: 0,
    loading: true,
    error: '',
    success: ''
};

const bookReducer = (state = initialState, action) => {

    switch (action.type) {
        case BookActionTypes.fetchBookSuccess:
            return {
                ...state,
                books: action.payload,
                count: action.payload.length,
                loading: false
            }
        case BookActionTypes.fetchBookFailure:
            return {
                ...state,
                books: [],
                count: 0,
                loading: false,
                error: action.payload
            }
        case BookActionTypes.searchBook:
            debugger;
            const newArray = state.Books.filter(s => s.Title.includes(action.payload));
            return {
                ...state,
                books: newArray,
                loading: false,
                error: ''
            }

        default:
            return state;
    }
};

export default bookReducer;