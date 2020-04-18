import { StudentActionTypes } from '../constants/actionTypes';


let initialState = {
    students: [],
    count: 0,
    loading: true,
    error: '',
    success: ''
};

const studentReducer = (state = initialState, action) => {

    switch (action.type) {
        case StudentActionTypes.fetchStudentSuccess:
            return {
                ...state,
                students: action.payload,
                count: action.payload.length,
                loading: false
            }
        case StudentActionTypes.fetchStudentFailure:
            return {
                ...state,
                students: [],
                count: 0,
                loading: false,
                error: action.payload
            }
        case StudentActionTypes.searchStudent:
            //debugger;
            const newArray = state.students.filter(s => s.StudentName.includes(action.payload));
            return {
                ...state,
                students: newArray,
                loading: false,
                error: ''
            }

        default:
            return state;
    }
};

export default studentReducer;