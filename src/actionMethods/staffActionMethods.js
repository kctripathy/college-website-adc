import { StaffActionTypes } from "../constants/actionTypes";
import { loadAllStaffs } from "../api";

const fetchStaffSuccess = (staffs) => {
  return {
    type: StaffActionTypes.fetchStaffSuccess,
    payload: staffs,
  };
};
const fetchStaffFailure = (error) => {
  return {
    type: StaffActionTypes.fetchStaffFailure,
    payload: error,
  };
};

const fetchStaffSearch = (searchText) => {
  return {
    type: StaffActionTypes.SearchStaff,
    payload: searchText,
  };
};

const fetchStaffByUserName = (username) => {
  return {
    type: StaffActionTypes.fetchStaffByUserName,
    payload: username,
  };
};

const fetchStaffByEmployeeID = (id) => {
  return {
    type: StaffActionTypes.fetchStaffByEmployeeID,
    payload: id,
  };
};

const fetchStaffs = () => {
  //debugger;
  return (dispatch) =>
    loadAllStaffs()
      .then((data) => {
        if (data === undefined)
          dispatch(fetchStaffFailure("Some error occured"));
        else dispatch(fetchStaffSuccess(data));
      })
      .catch((err) => {
        dispatch(fetchStaffFailure(err));
      });
};

export {
  fetchStaffs,
  fetchStaffSearch,
  fetchStaffByUserName,
  fetchStaffByEmployeeID,
};
