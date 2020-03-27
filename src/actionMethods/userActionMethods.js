import { UserActionTypes } from '../constants/actionTypes';
import { loadAllUsers } from '../api/user';


const fetchUserSuccess = (users) => {
    return {
        type: UserActionTypes.fetchUserSuccess,
        payload: users
    }
};
const fetchUserFailure = (error) => {
    return {
        type: UserActionTypes.fetchUserFailure,
        payload: error
    }
};


const fetchUsers = () => {
    return (dispatch) => loadAllUsers()
        .then(data => {
            //debugger;
            if (data === undefined)
                dispatch(fetchUserFailure('Some error occured'));
            else if (data.status.code === "1")
                dispatch(fetchUserSuccess(data.result))
            else
                dispatch(fetchUserFailure(data.status.message))
        })
        .catch(err => {
            dispatch(fetchUserFailure(err))
        })
};


export { fetchUsers }