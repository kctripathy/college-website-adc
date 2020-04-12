import { StaffActionTypes } from '../constants/actionTypes';

let initialState = {
    staffs: [],
    employee: [],
    loading: true,
    count: 0,
    error: '',
    success: ''
};

const staffReducer = (state = initialState, action) => {
    //debugger;
    switch (action.type) {
        case StaffActionTypes.fetchStaffSuccess:
            return {
                ...state,
                count: action.payload.length,
                staffs: action.payload,
                loading: false
            }
        case StaffActionTypes.fetchStaffFailure:
            return {
                ...state,
                count: 0,
                staffs: [],
                loading: false,
                error: action.payload
            }
        case StaffActionTypes.searchStaff:
            const newArray = state.staffs.filter(s => s.UserReferenceName.includes(action.payload));
            return {
                ...state,
                staffs: newArray,
                loading: false,
                error: ''
            }
        case StaffActionTypes.getStaffByUserName:
            debugger;
            const emp = state.staffs.filter(s => s.EmployeeCode === action.payload);
            return {
                ...state,
                employee: emp,
                loading: false,
                error: ''
            }
        default:
            return state;
    }
};

export default staffReducer;