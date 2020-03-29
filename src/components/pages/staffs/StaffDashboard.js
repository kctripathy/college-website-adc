import React from 'react';
import { Link } from 'react-router-dom'
import DashboardLayout from '../LayoutDashboard';
import { isAuthenticated } from '../../../api/user';
//import { useSelector } from "react-redux";

export default function StaffDashboard() {

    //const state = useSelector(state => state.user);
    //const { UserID, UserName, UserType, UserFirstName, UserReferenceName, RoleID, RoleDescription } = state.loggedOnUser;

    const { UserID, UserName, UserType, UserFirstName, UserReferenceName, RoleID, RoleDescription } = isAuthenticated();

    //console.log('state=', state);
    //console.log('UserName=', UserName);

    return (
        <DashboardLayout title={`Staff's Dashboard`}>
            <div className="row">
                <div className="col-3">
                    <ul className="list-group">
                        <li className="list-group-item text-center">
                            <h5>{UserReferenceName}</h5>
                            <b>{UserName}</b>
                        </li>
                        <li className="list-group-item">
                            <Link to={`/user/profile`}>View My Profile</Link>
                        </li>

                        <li className="list-group-item">
                            <Link to={`/user/profile/${UserID}`}>Add Recent Activities</Link>
                        </li>

                        <li className="list-group-item">
                            <Link to={`/user/profile/${UserID}`}>Add Publications (Articles, Thesis,etc.)</Link>
                        </li>

                        <li className="list-group-item">
                            <Link to={`/user/profile/${UserID}`}>Submit Attendence of Students</Link>
                        </li>

                        <li className="list-group-item">
                            <Link to={`/user/profile/${UserID}`}>Apply for Leave</Link>
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
        </DashboardLayout>
    );
}
