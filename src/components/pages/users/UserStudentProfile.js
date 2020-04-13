import React, { useState, useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import DashboardLayout from '../LayoutDashboard';
import { fetchStudents } from '../../../actionMethods/studentActionMethods'
import Loading from '../../commons/Loading';
import UserProfileRow from './UserProfileRow';
import { loadAllDistricts, updateStudent } from '../../../api'
//import { ValueService } from 'ag-grid-community';

export default function UserStudentProfile(props) {
    const dispatch = useDispatch();
    const state = useSelector(state => state.student);
    const [student, setStudent] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const [values, setValues] = useState({
        StudentID: 0,
        EmailID: '',
        LandPhoneNumber: '',
        MobileNumber: '',
        Address_Present_TownOrCity: '',
        Address_Present_DistrictID: 0,
        Address_Present_Pincode: ''
    })

    const { EmailID, MobileNumber, LandPhoneNumber, Address_Present_TownOrCity, Address_Present_DistrictID, Address_Present_Pincode } = values;

    useEffect(() => {
        loadAllDistricts()
            .then(response => {
                setDistricts(response);
            })
        if (state.students && state.students.length === 0) {
            dispatch(fetchStudents())
        }
        else {
            const arr = state.students.filter(s => s.StudentCode === props.UserName);
            setStudent(arr[0]);
            setValues({
                ...values,
                StudentID: arr[0].StudentID,
                EmailID: arr[0].EmailID,
                MobileNumber: arr[0].MobileNumber,
                LandPhoneNumber: arr[0].LandPhoneNumber,
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
        debugger;
        if ((MobileNumber) && (MobileNumber.length > 0 && MobileNumber.length !== 10)) {
            isSuccess = false;
            message = "Mobile Number should be 10 digit"
        }
        else if ((LandPhoneNumber) && (LandPhoneNumber.length > 0 && LandPhoneNumber.length !== 10)) {
            isSuccess = false;
            message = "Phone Number should be 10 digit"
        }
        else if ((Address_Present_Pincode) && (Address_Present_Pincode.length > 0 && Address_Present_Pincode.length !== 6)) {
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
            updateStudent(values)
                .then(response => {
                    //debugger;
                    if (response.status.code !== "-3") {
                        setError('')
                        setSuccess(response.result);
                        dispatch(fetchStudents());
                    }
                    else {
                        setSuccess('');
                        setError(response.result);
                    }
                })
                .catch(err => {
                    //console.log(err);
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
            //console.log("student", arr);
            return (
                <form onSubmit={submitFormHandler}>
                    <div className="row d-flex text-left pl-4">
                        {/* <UserProfileRow rowTitle="Name of the student"
                            rowValue={student.StudentName}
                            isReadOnly={true}
                            isDisabled={true}
                            onUserProfileRowTextChanged={(e) => textBoxChangeHandler(e)}
                        /> */}
                        <div className="col-12 p-1 m-0 mb-2 w-50 bg-page-title" style={{ marginLeft: "-20px !important", textTransform: "uppercase" }}>
                            <b>{`PROFILE ::  ${student.Salutation} ${student.StudentName} | ${student.StudentCode} `}</b>
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
                            rowValue={student.StudentCode}
                            isReadOnly={true}
                            isDisabled={true}
                            onUserProfileRowTextChanged={(e) => textBoxChangeHandler(e)} /> */}

                        <UserProfileRow
                            rowType="text"
                            rowID="empName"
                            rowName="empName"
                            rowTitle="Name of the student"
                            rowValue={student.StudentName}
                            isReadOnly={true}
                            isDisabled={true}
                            onUserProfileRowTextChanged={(e) => textBoxChangeHandler(e)} />


                        <UserProfileRow
                            rowType="text"
                            rowID="className"
                            rowName="className"
                            rowTitle="Class Name"
                            rowValue={student.ClassName}
                            isReadOnly={true}
                            isDisabled={true}
                            onUserProfileRowTextChanged={(e) => textBoxChangeHandler(e)} />

                        <UserProfileRow
                            rowType="text"
                            rowID="rollNo"
                            rowName="rollNo"
                            rowTitle="Roll No."
                            rowValue={student.RollNo}
                            isReadOnly={true}
                            isDisabled={true}
                            onUserProfileRowTextChanged={(e) => textBoxChangeHandler(e)} />

                        <UserProfileRow
                            rowType="text"
                            rowID="dob"
                            rowName="dob"
                            rowTitle="Date of Birth"
                            rowValue={student.DateOfBirth}
                            isReadOnly={true}
                            isDisabled={true}
                            onUserProfileRowTextChanged={(e) => textBoxChangeHandler(e)} />

                        <UserProfileRow
                            rowType="text"
                            rowID="doj"
                            rowName="doj"
                            rowTitle="Date of Admission"
                            rowValue={student.DateOfAdmission}
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
                            rowID="Mobile"
                            rowName="Mobile"
                            rowTitle="Phone Number"
                            rowValue={MobileNumber}
                            isReadOnly={false}
                            isDisabled={false}
                            onUserProfileRowTextChanged={(e) => textBoxChangeHandler(e)} />


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
