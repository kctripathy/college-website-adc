import React from 'react';
import { isAuthenticated } from '../../../api/user';
import DashboardLayout from '../LayoutDashboard';


export default function UserChangePassword() {
    const { UserID, UserName, UserType, UserFirstName, UserReferenceID, UserReferenceName, RoleID, RoleDescription } = isAuthenticated();

    // const showProfile = () => {
    //     if (RoleID === 4) { // student
    //         return (
    //             <UserStudentProfile />
    //         )
    //     }
    //     else {
    //         return (
    //             <UserStaffProfile UserName={UserName} EmployeeID={UserReferenceID} />
    //         )
    //     }
    // }

    return (
        <DashboardLayout title="Change your password">
            <h4>UserChangePassword</h4>
        </DashboardLayout>
    );
}
