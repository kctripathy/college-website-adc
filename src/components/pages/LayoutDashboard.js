import React, { useState, useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, withRouter } from 'react-router-dom'
import { isAuthenticated, logout } from '../../api/user';
import { API_URL } from '../../config';

function LayoutDashboard(props) {
    //const dispatch = useDispatch();
    const student = useSelector(state => state.student);
    const staff = useSelector(state => state.staff);
    const [userProfile, setUserProfile] = useState([])
    const [run, setRun] = useState(true);

    const { UserID, UserName, UserType, UserFirstName, UserReferenceID, UserReferenceName, RoleID, RoleDescription } = isAuthenticated();

    //console.log('run in dashboard > refreshStatus=', props.refreshStatus, " run = ", run);

    useEffect(() => {
        //console.clear();
        //console.log("=============================");
        setRun(props.refreshStatus === undefined ? true : props.refreshStatus);
        if (RoleID === undefined) {
            return;
        }
        if (RoleID === 1 || RoleID === 2 || RoleID === 3) {
            //dispatch(fetchStaffByID(UserID))
            fetchStaffProfile()
        }
        else if (RoleID === 4) {
            //dispatch(fetchStudentByID(UserID))
            fetchStudentProfile()
        }
    }, [props.refreshStatus]);

    const fetchStaffProfile = () => {
        const theProfile = staff.staffs.filter(s => s.EmployeeCode === UserName)
        setUserProfile(theProfile);
    };

    const fetchStudentProfile = () => {
        const theProfile = student.students.filter(s => s.RollNo === UserName)
        setUserProfile(theProfile);
    };

    const showProfilePhoto = () => {
        //console.log("showProfilePhoto====")
        let profilePhotoUrl;
        if (RoleID === 1 || RoleID === 2 || RoleID === 3) {
            profilePhotoUrl = `${API_URL}/user/photo/employee/${UserReferenceID}/${Math.random().toString(36).slice(2)}`
        }
        else if (RoleID === 4) {
            profilePhotoUrl = `${API_URL}/studentprofile/${UserReferenceID}`
        }
        return <Fragment>
            <li className="list-group-item m-0 p-0">
                <img src={`${profilePhotoUrl}`} className="img img-responsive w-100" alt={`${UserReferenceName}`} />
                <div className="text-center p-2">
                    <Link to="/user/upload-profile-photo">Change Profile Photo</Link>
                </div>
            </li>
        </Fragment>
    };

    const isActive = (path) => {
        //debugger;
        if (props.history.location.pathname === path) {
            return ("active-left-menu")
        }
        else {
            return ("inactive-left-menu")
        }
    };

    return (
        <div className="container-fluid layout">
            {/* <h2 className="page-title pl-10 text-left">
                {props.title ? props.title : ''}
            </h2> */}
            <div className="row mt-2">
                <div className="col-lg-3 col-sm-12 col-xs-12">
                    <ul className="list-group">
                        <li className="list-group-item text-center list-group-item-secondary" >
                            <span className="font-weight-bolder">{UserReferenceName.toUpperCase()}</span>
                            {/* <b>{UserName}</b> */}
                        </li>
                        {showProfilePhoto()}
                        <li className={`list-group-item ${isActive("/user/profile")}`}>
                            <Link to={`/user/profile`}>View/Edit My Profile</Link>
                        </li>

                        <li className={`list-group-item ${isActive("/user/add-activity")}`}>
                            <Link to={`/user/add-activity`}>Add Recent Activities</Link>
                        </li>

                        <li className={`list-group-item ${isActive("/user/submit-feedback")}`}>
                            <Link to={`/user/submit-feedback`}>Submit Feedback</Link>
                        </li>

                        <li className={`list-group-item ${isActive("/user/change-password")}`}>
                            <Link to="/user/change-password">Change Password</Link>
                        </li>

                        <li className="list-group-item">
                            <Link className="dropdown-item" to="#" onClick={() => logout(() => { props.history.push("/login") })}>Logout</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-9 col-xs-12 col-sm-12 text-center">
                    {props.children}
                </div>
            </div>
        </div>
    );
}


export default withRouter(LayoutDashboard);