import React from 'react';
import { isAuthenticated } from '../../../api/user';
import DashboardLayout from '../LayoutDashboard';


export default function UserSubmitFeedback() {
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
        <DashboardLayout title="Submit Feedback">
            <h4>UserSubmitFeedback</h4>
        </DashboardLayout>
    );
}
