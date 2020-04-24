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
                total_male: action.payload.reduce((n, x) => n + (x.Gender === 'Male'), 0),
                total_female: action.payload.reduce((n, x) => n + (x.Gender === 'Female'), 0),
                total_students_first_year: action.payload.reduce((n, x) => n + (x.ClassID === 2), 0),
                total_students_second_year: action.payload.reduce((n, x) => n + (x.ClassID === 3), 0),
                total_students_third_year: action.payload.reduce((n, x) => n + (x.ClassID === 4), 0),
                total_category_general: action.payload.reduce((n, x) => n + (x.Caste === 'Gen'), 0),
                total_category_OBC: action.payload.reduce((n, x) => n + (x.Caste === 'OBC'), 0),
                total_category_SC: action.payload.reduce((n, x) => n + (x.Caste === 'SC'), 0),
                total_category_ST: action.payload.reduce((n, x) => n + (x.Caste === 'ST'), 0),
                total_category_others: action.payload.reduce((n, x) => n + (x.Caste === 'Others'), 0),
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