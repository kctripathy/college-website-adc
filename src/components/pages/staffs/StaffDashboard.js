import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import DashboardLayout from '../LayoutDashboard';
import { isAuthenticated } from '../../../api/user';
import { useSelector, useDispatch } from "react-redux";
import { fetchStaffByUserName } from '../../../actionMethods/staffActionMethods';
import { API_URL } from '../../../config';


export default function StaffDashboard() {
    const [employee, setEmployee] = useState({})
    const state = useSelector(state => state.staff);
    const dispatch = useDispatch();

    const { UserID, UserName, UserType, UserFirstName, UserReferenceID, UserReferenceName, RoleID, RoleDescription } = isAuthenticated();
    useEffect(() => {
        if (state && state.staffs && state.staffs.length === 0) {
            dispatch(fetchStaffByUserName(UserName))
        }
        // else {
        //     //debugger;
        //     const emp = state.staffs.filter(s => s.EmployeeCode === UserName);
        //     setEmployee(emp);
        // }
    }, []);

    //const state = useSelector(state => state.user);
    //const { UserID, UserName, UserType, UserFirstName, UserReferenceName, RoleID, RoleDescription } = state.loggedOnUser;


    //console.log('staff->state=', state);
    //console.log('staff->employee=', employee);
    //console.log('UserName=', UserName);

    return (
        <DashboardLayout title={`Staff's Dashboard`}>
            <div className="row">
                <div className="col-12 text-center">
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
