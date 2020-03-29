import React from 'react';
import { Link } from 'react-router-dom'
import DashboardLayout from '../LayoutDashboard';
import { isAuthenticated } from '../../../api/user';
//import { useSelector } from "react-redux";

export default function StudentDashboard() {

    const { UserID, UserName, UserType, UserFirstName, UserReferenceName, RoleID, RoleDescription } = isAuthenticated();

    return (
        <DashboardLayout title={`Student's Dashboard`}>
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
        </DashboardLayout>
    );
}
