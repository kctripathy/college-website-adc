import React, { useState } from 'react';
import { isAuthenticated } from '../../../api/user';
import DashboardLayout from '../LayoutDashboard';


export default function UserSubmitFeedback() {
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const { UserID, UserName, UserType, UserFirstName, UserReferenceID, UserReferenceName, RoleID, RoleDescription } = isAuthenticated();

    const validateFormFields = () => {
        let isSuccess = true;
        let message = '';
        setSuccess('');
        setError('');

        return isSuccess;
    }
    const submitFormHandler = (e) => {
        e.preventDefault();
        if (validateFormFields()) {

        }
    };
    const showErrorMessage = () => {
        return error.length === 0 ? ('') : (<div className="alert alert-danger m-0 p-2 text-center w-70">{error}</div>)
    };

    const showSuccessMessage = () => {
        return success.length === 0 ? ('') : (<div className="alert alert-success m-0 p-2 text-center w-70">{success}</div>)
    };

    return (
        <DashboardLayout title="Change your password">
            <form onSubmit={submitFormHandler}>
                <div className="row d-flex text-left pl-4">
                    {/* <UserProfileRow rowTitle="Name of the student"
                            rowValue={student.StudentName}
                            isReadOnly={true}
                            isDisabled={true}
                            onUserProfileRowTextChanged={(e) => textBoxChangeHandler(e)}
                        /> */}
                    <div className="col-12 p-1 m-0 mb-2 w-50 bg-page-title" style={{ marginLeft: "-20px !important", textTransform: "uppercase" }}>
                        <b>SUBMIT FEEDBACK</b>
                    </div>
                    <div className="col-11 p-0 m-0" style={{ marginLeft: "-20px !important" }}>
                        {showErrorMessage()}
                        {showSuccessMessage()}
                    </div>
                </div>
            </form>
        </DashboardLayout>
    );
}
