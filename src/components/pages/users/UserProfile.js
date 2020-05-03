import React from "react";
import UserStaffProfile from "./UserStaffProfile";
import UserStudentProfile from "./UserStudentProfile";
import { isAuthenticated } from "../../../api/user";
import DashboardLayout from "../LayoutDashboard";

export default function UserProfile() {
  const { UserName, UserReferenceID, RoleID } = isAuthenticated();

  const showProfile = () => {
    if (RoleID === 4) {
      // student
      return (
        <UserStudentProfile UserName={UserName} StudentID={UserReferenceID} />
      );
    } else {
      return (
        <UserStaffProfile UserName={UserName} EmployeeID={UserReferenceID} />
      );
    }
  };

  return (
    <DashboardLayout title={`View / Edit My Profile`}>
      {showProfile()}
    </DashboardLayout>
  );
}
