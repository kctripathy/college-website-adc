import { BookActionTypes } from '../constants/actionTypes';
import { loadAllBooks } from '../api'

const fetchBooksuccess = (books) => {
    return {
        type: BookActionTypes.fetchBookSuccess,
        payload: books
    }
};
const fetchBookFailure = (error) => {
    return {
        type: BookActionTypes.fetchBookFailure,
        payload: error
    }
};

const fetchBooksearch = (searchText) => {
    return {
        type: BookActionTypes.SearchBook,
        payload: searchText
    }
}

const fetchBooks = () => {
    //debugger;
    return (dispatch) => loadAllBooks()
        .then(data => {
            if (data === undefined)
                dispatch(fetchBookFailure('Some error occured'));
            else
                dispatch(fetchBooksuccess(data))
        })
        .catch(err => {
            dispatch(fetchBookFailure(err))
        })
};


export { fetchBooks, fetchBooksearch }