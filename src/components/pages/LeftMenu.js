
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import DashboardLayout from '../LayoutDashboard';
import { isAuthenticated } from '../../../api/user';


export default function LeftMenu() {

    const dispatch = useDispatch();
    const student = useSelector(state => state.student);
    const staff = useSelector(state => state.staff);
    const [userProfile, setUserProfile] = useState([])

    const { UserID, UserName, UserType, UserFirstName, UserReferenceName, RoleID, RoleDescription } = isAuthenticated();
    useEffect(() => {
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
    }, []);

    const fetchStaffProfile = () => {
        const theProfile = staff.staffs.filter(s => s.EmployeeCode === UserName)
        setUserProfile(theProfile);
    };

    const fetchStudentProfile = () => {
        const theProfile = student.students.filter(s => s.RollNo === UserName)
        setUserProfile(theProfile);
    };
    return (
        <div className="row">
            <div className="col-3">
                <ul className="list-group">
                    <li className="list-group-item text-center">
                        <h5>{UserReferenceName}</h5>
                        <b>{UserName}</b>
                    </li>
                    <li className="list-group-item">
                        <Link to={`/user/profile/${UserID}`}>View My Profile</Link>
                    </li>

                    <li className="list-group-item">
                        <Link to={`/user/profile/${UserID}`}>Add Recent Activities</Link>
                    </li>

                    <li className="list-group-item">
                        <Link to={`/user/feedback/${UserID}`}>Submit Feedback</Link>
                    </li>

                    <li className="list-group-item">
                        <Link to="/change-password">Change Password</Link>
                    </li>

                    <li className="list-group-item">
                        <Link to="/logout">Logout</Link>
                    </li>
                </ul>
            </div>
            <div className="col-9 text-center">
                <div className="row">
                    <div className="col-12">Chart</div>
                </div>
                <div className="row">
                    <div className="col-4">1</div>
                    <div className="col-4">2</div>
                    <div className="col-4">3</div>
                </div>
                <div className="row">
                    <div className="col-6">A</div>
                    <div className="col-6">B</div>
                </div>
            </div>
        </div>
    );
}
