import React, { useState, useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import DashboardLayout from '../LayoutDashboard';
import { fetchStaffs } from '../../../actionMethods/staffActionMethods'
import Loading from '../../commons/Loading';
import UserProfileRow from './UserProfileRow';
import { loadAllDistricts, updateStaff } from '../../../api'
//import { ValueService } from 'ag-grid-community';

export default function UserStaffProfile(props) {
    const dispatch = useDispatch();
    const state = useSelector(state => state.staff);
    const [staff, setStaff] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const [values, setValues] = useState({
        EmployeeID: 0,
        EmailID: '',
        PhoneNumber: '',
        Mobile: '',
        Address_Present_TownOrCity: '',
        Address_Present_DistrictID: 0,
        Address_Present_Pincode: ''
    })

    const { EmailID, Mobile, PhoneNumber, Address_Present_TownOrCity, Address_Present_DistrictID, Address_Present_Pincode } = values;

    useEffect(() => {
        loadAllDistricts()
            .then(response => {
                setDistricts(response);
            })
        if (state.staffs && state.staffs.length === 0) {
            dispatch(fetchStaffs())
        }
        else {
            const arr = state.staffs.filter(s => s.EmployeeCode === props.UserName);
            setStaff(arr[0]);
            setValues({
                ...values,
                EmployeeID: arr[0].EmployeeID,
                EmailID: arr[0].EmailID,
                Mobile: arr[0].Mobile,
                PhoneNumber: arr[0].PhoneNumber,
                Address_Present_TownOrCity: arr[0].Address_Present_TownOrCity,
                Address_Present_DistrictID: arr[0].Address_Present_DistrictID,
                Address_Present_Pincode: arr[0].Address_Present_Pincode
            })
        }
    }, [state])

    const validateFormFields = () => {
        let isSuccess = true;
        let message = '';
        setSuccess('');
        setError('');
        if (Mobile.length > 0 && Mobile.length !== 10) {
            isSuccess = false;
            message = "Mobile Number should be 10 digit"
        }
        else if (PhoneNumber.length > 0 && PhoneNumber.length !== 10) {
            isSuccess = false;
            message = "Phone Number should be 10 digit"
        }
        else if (Address_Present_Pincode.length > 0 && Address_Present_Pincode.length !== 6) {
            isSuccess = false;
            message = "PIN Code should be 6 digit"
        }
        if (!isSuccess) {
            setError(message);
        }
        else {
            setError('');
        }
        return isSuccess;
    }
    const submitFormHandler = (e) => {
        e.preventDefault();
        if (validateFormFields()) {
            //alert('form submit', e);
            updateStaff(values)
                .then(response => {
                    //debugger;
                    if (response.status.code !== "-3") {
                        setError('')
                        setSuccess(response.result);
                        dispatch(fetchStaffs());
                    }
                    else {
                        setSuccess('');
                        setError(response.result);
                    }
                })
                .catch(err => {
                    console.log(err);
                    setSuccess('');
                    setError('');
                })
        }
    };

    const textBoxChangeHandler = (e) => {
        e.preventDefault();
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    };

    const dropdownChangeHandler = (e) => {
        e.preventDefault();
        //alert(e.target.value);
        //alert(e.target.name);
        setValues({
            ...values,
            Address_Present_DistrictID: e.target.value
        })
    };

    const showProfileInfo = () => {

        if (state.loading)
            return <Loading text="Fetching profile information" />
        else {

            //
            //console.log("staff", arr);
            return (
                <form onSubmit={submitFormHandler}>
                    <div className="row d-flex text-left pl-4">
                        {/* <UserProfileRow rowTitle="Name of the Staff"
                            rowValue={staff.EmployeeName}
                            isReadOnly={true}
                            isDisabled={true}
                            onUserProfileRowTextChanged={(e) => textBoxChangeHandler(e)}
                        /> */}
                        <div className="col-12 p-1 m-0 mb-2 w-50 bg-page-title" style={{ marginLeft: "-20px !important" }}>
                            <b>{`PROFILE ::  ${staff.Salutation} ${staff.EmployeeName} | ${staff.EmployeeCode} | ${staff.RoleDescription}:`}</b>
                        </div>
                        <div className="col-11 p-0 m-0" style={{ marginLeft: "-20px !important" }}>
                            {showErrorMessage()}
                            {showSuccessMessage()}
                        </div>
                        {/* <UserProfileRow
                            rowType="text"
                            rowID="empCode"
                            rowName="empCode"
                            rowTitle="User Name / Login ID"
                            rowValue={staff.EmployeeCode}
                            isReadOnly={true}
                            isDisabled={true}
                            onUserProfileRowTextChanged={(e) => textBoxChangeHandler(e)} /> */}

                        <UserProfileRow
                            rowType="text"
                            rowID="empName"
                            rowName="empName"
                            rowTitle="Name of the Staff"
                            rowValue={staff.EmployeeName}
                            isReadOnly={true}
                            isDisabled={true}
                            onUserProfileRowTextChanged={(e) => textBoxChangeHandler(e)} />


                        <UserProfileRow
                            rowType="text"
                            rowID="desg"
                            rowName="desg"
                            rowTitle="Designation"
                            rowValue={staff.DesignationDescription}
                            isReadOnly={true}
                            isDisabled={true}
                            onUserProfileRowTextChanged={(e) => textBoxChangeHandler(e)} />

                        <UserProfileRow
                            rowType="text"
                            rowID="deptName"
                            rowName="deptName"
                            rowTitle="Department"
                            rowValue={staff.DepartmentDescription}
                            isReadOnly={true}
                            isDisabled={true}
                            onUserProfileRowTextChanged={(e) => textBoxChangeHandler(e)} />

                        <UserProfileRow
                            rowType="text"
                            rowID="dob"
                            rowName="dob"
                            rowTitle="Date of Birth"
                            rowValue={staff.DateOfBirth}
                            isReadOnly={true}
                            isDisabled={true}
                            onUserProfileRowTextChanged={(e) => textBoxChangeHandler(e)} />

                        <UserProfileRow
                            rowType="text"
                            rowID="doj"
                            rowName="doj"
                            rowTitle="Date of Join in Office"
                            rowValue={staff.JoiningDateInOffice}
                            isReadOnly={true}
                            isDisabled={true}
                            onUserProfileRowTextChanged={(e) => textBoxChangeHandler(e)} />

                        <UserProfileRow
                            rowType="text"
                            rowID="Address_Present_TownOrCity"
                            rowName="Address_Present_TownOrCity"
                            rowTitle="Present Address"
                            rowValue={Address_Present_TownOrCity}
                            isReadOnly={false}
                            isDisabled={false}
                            onUserProfileRowTextChanged={(e) => textBoxChangeHandler(e)} />

                        {showDistricts()}

                        <UserProfileRow
                            rowType="number"
                            rowID="Address_Present_Pincode"
                            rowName="Address_Present_Pincode"
                            rowTitle="PIN"
                            rowValue={Address_Present_Pincode}
                            isReadOnly={false}
                            isDisabled={false}
                            onUserProfileRowTextChanged={(e) => textBoxChangeHandler(e)} />

                        <UserProfileRow
                            rowType="email"
                            rowID="EmailID"
                            rowName="EmailID"
                            rowTitle="Email Address"
                            rowValue={EmailID}
                            isReadOnly={false}
                            isDisabled={false}
                            onUserProfileRowTextChanged={(e) => textBoxChangeHandler(e)} />



                        <UserProfileRow
                            rowType="number"
                            rowID="PhoneNumber"
                            rowName="PhoneNumber"
                            rowTitle="Mobile Phone Number"
                            rowValue={PhoneNumber}
                            isReadOnly={false}
                            isDisabled={false}
                            onUserProfileRowTextChanged={(e) => textBoxChangeHandler(e)} />

                        <UserProfileRow
                            rowType="number"
                            rowID="Mobile"
                            rowName="Mobile"
                            rowTitle="Alternate Phone Number"
                            rowValue={Mobile}
                            isReadOnly={false}
                            isDisabled={false}
                            onUserProfileRowTextChanged={(e) => textBoxChangeHandler(e)} />

                        {/* <UserProfileRow
                            rowType="text"
                            rowID="empRole"
                            rowName="empRole"
                            rowTitle="Role of the Staff"
                            rowValue={staff.RoleDescription}
                            isReadOnly={true}
                            isDisabled={true}
                            onUserProfileRowTextChanged={(e) => textBoxChangeHandler(e)} /> */}

                        <div className="col-3  p-1"></div>
                        <div className="col-5  p-0 text-center" >
                            <button className={getButtonClass()}>UPDATE MY PROFILE</button>
                        </div>
                        <div className="col-4  p-1"></div>
                    </div>
                </form >
            )
        }
    };

    const showDistricts = () => {
        return (
            districts.length === 0 ? ("") :
                (<Fragment>
                    <div className="col-3  p-1 text-right">District:</div>
                    <div className="col-5  p-1 w-100">
                        <select className="w-100" name="Address_Present_DistrictID" value={Address_Present_DistrictID} onChange={dropdownChangeHandler}>
                            {districts.map(d => <option key={d.DistrictID} value={d.DistrictID} >{d.DistrictName}</option>)}
                        </select>
                    </div>
                    <div className="col-4  p-1 text-right"></div>
                </Fragment>)
        )
    };

    const getButtonClass = () => {
        return "btn btn-primary btn-outline m-2 pl-3 pr-3"
    };

    const showErrorMessage = () => {
        return error.length === 0 ? ('') : (<div className="alert alert-danger m-0 p-2 text-center w-70">{error}</div>)
    };

    const showSuccessMessage = () => {
        return success.length === 0 ? ('') : (<div className="alert alert-success m-0 p-2 text-center w-70">{success}</div>)
    };

    return (
        <>
            {showProfileInfo()}
            {/* <pre>
                {JSON.stringify(values, null, 4)}
            </pre> */}
        </>
    );
}
