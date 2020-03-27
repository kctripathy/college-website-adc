import { StudentActionTypes } from '../constants/actionTypes';
import { loadAllStudents } from '../api'

const fetchStudentSuccess = (students) => {
    return {
        type: StudentActionTypes.fetchStudentSuccess,
        payload: students
    }
};
const fetchStudentFailure = (error) => {
    return {
        type: StudentActionTypes.fetchStudentFailure,
        payload: error
    }
};

const fetchStudentSearch = (searchText) => {
    return {
        type: StudentActionTypes.SearchStudent,
        payload: searchText
    }
}

const fetchStudents = () => {
    //debugger;
    return (dispatch) => loadAllStudents()
        .then(data => {
            if (data === undefined)
                dispatch(fetchStudentFailure('Some error occured'));
            else
                dispatch(fetchStudentSuccess(data))
        })
        .catch(err => {
            dispatch(fetchStudentFailure(err))
        })
};


export { fetchStudents, fetchStudentSearch }