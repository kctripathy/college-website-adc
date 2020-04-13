import React from 'react';
import { Link } from 'react-router-dom'
import DashboardLayout from '../LayoutDashboard';
import { isAuthenticated } from '../../../api/user';
//import { useSelector } from "react-redux";

export default function StudentDashboard() {

    const { UserID, UserName, UserType, UserFirstName, UserReferenceName, RoleID, RoleDescription } = isAuthenticated();

    return (
        <DashboardLayout title={`Student's Dashboard`}>
            <div className="row d-flex text-left pl-4">
                <div className="col-12 p-1 m-0 mb-2 w-50 bg-page-title" style={{ marginLeft: "-20px !important" }}>
                    <b>Student's Dashboard</b>
                </div>
            </div>
        </DashboardLayout>
    );
}
