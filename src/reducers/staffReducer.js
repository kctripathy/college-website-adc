import { StaffActionTypes } from "../constants/actionTypes";

let initialState = {
  staffs: [],
  staff: {},
  loading: true,
  count: 0,
  error: "",
  success: "",
};

function count(arr) {
  return arr.reduce((a, b) => (a[b] = a[b] + 1 || 1) && a, {});
}

const staffReducer = (state = initialState, action) => {
  //debugger;
  switch (action.type) {
    case StaffActionTypes.fetchStaffSuccess:
      var count_teaching_staffs = action.payload.reduce(function (n, val) {
        return n + (val.TeachingOrNonTeaching === "T");
      }, 0);
      let count_non_teaching_staffs = action.payload.reduce(
        (n, x) => n + (x.TeachingOrNonTeaching === "N"),
        0
      );
      return {
        ...state,
        count: action.payload.length,
        staffs: action.payload,
        total_teaching_staffs: count_teaching_staffs,
        total_non_teaching_staffs: count_non_teaching_staffs,
        loading: false,
      };
    case StaffActionTypes.fetchStaffFailure:
      return {
        ...state,
        count: 0,
        staffs: [],
        loading: false,
        error: action.payload,
      };
    case StaffActionTypes.searchStaff:
      const newArray = state.staffs.filter((s) =>
        s.UserReferenceName.includes(action.payload)
      );
      return {
        ...state,
        staffs: newArray,
        loading: false,
        error: "",
      };
    case StaffActionTypes.fetchStaffByUserName:
      //debugger;
      //const emp = state.staffs.filter((s) => s.EmployeeCode === action.payload);
      return {
        ...state,
        staff: state.staffs.filter((s) => s.EmployeeCode === action.payload),
        loading: false,
        error: "",
      };
      break;
    case StaffActionTypes.fetchStaffByEmployeeID:
      //debugger;
      const theStaff = state.staffs.filter(
        (s) => s.EmployeeID === action.payload
      )[0];
      return {
        ...state,
        staff: theStaff,
        loading: false,
        error: "",
      };
    default:
      return state;
  }
};

export default staffReducer;
