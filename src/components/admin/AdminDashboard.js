import React from 'react';
import { Link } from 'react-router-dom'
import DashboardLayout from '../pages/LayoutDashboard';
import { useSelector } from "react-redux";

export default function AdminDashboard() {

    const state = useSelector(state => state.user);
    //const { UserName, UserReferenceName,  } = 
    const { UserID, UserName, UserType, UserFirstName, UserReferenceName, RoleID, RoleDescription } = state.loggedOnUser;
    console.log('state=', state);
    console.log('UserName=', UserName);

    return (
        <DashboardLayout title="Administrator's Dashboard">
            <div className="row">
                <div className="col-3">
                    <ul className="list-group">
                        <li className="list-group-item">
                            {UserReferenceName}
                            <span className="text-right">
                                {UserName}
                            </span>
                        </li>
                        <li className="list-group-item">
                            <Link to="/user/profile/1">My Profile</Link>
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
