import React from 'react';
import UserStaffProfile from './UserStaffProfile';
import UserStudentProfile from './UserStudentProfile';
import { isAuthenticated } from '../../../api/user';
import DashboardLayout from '../LayoutDashboard';

// import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom'
// //import { useSelector } from "react-redux";
// import { fetchStaffs, fetchStaffByUserName } from '../../../actionMethods/staffActionMethods'


export default function UserProfile() {
    // const dispatch = useDispatch();
    // const student = useSelector(state => state.student);
    // const staff = useSelector(state => state.staff);
    // const [userProfile, setUserProfile] = useState([])

    const { UserID, UserName, UserType, UserFirstName, UserReferenceID, UserReferenceName, RoleID, RoleDescription } = isAuthenticated();
    // useEffect(() => {
    //     debugger;
    //     //dispatch(fetchStaffs());

    //     if (RoleID === undefined) {
    //         return;
    //     }
    //     if (RoleID === 1 || RoleID === 2 || RoleID === 3) {
    //         //dispatch(fetchStaffByID(UserID))
    //         //dispatch(fetchStaffByUserName(UserName))
    //         fetchStaffProfile()
    //     }
    //     else if (RoleID === 4) {
    //         //dispatch(fetchStudentByID(UserID))
    //         fetchStudentProfile()
    //     }
    // }, []);

    // const fetchStaffProfile = () => {
    //     const theProfile = staff.staffs.filter(s => s.EmployeeCode === UserName)
    //     setUserProfile(theProfile);
    // };

    // const fetchStudentProfile = () => {
    //     const theProfile = student.students.filter(s => s.RollNo === UserName)
    //     setUserProfile(theProfile);
    // };

    const showProfile = () => {
        if (RoleID === 4) { // student
            return (
                <UserStudentProfile />
            )
        }
        else {
            return (
                <UserStaffProfile UserName={UserName} EmployeeID={UserReferenceID} />
            )
        }
    }

    return (
        <DashboardLayout title={`View / Edit My Profile`}>
            {showProfile()}
        </DashboardLayout>
    );
}
