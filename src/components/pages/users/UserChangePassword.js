import React, { useState } from 'react';
import { isAuthenticated, changePassword } from '../../../api/user';
import DashboardLayout from '../LayoutDashboard';
import Loading from '../../commons/Loading'


export default function UserChangePassword() {
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);
    const [values, setValues] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    })
    const { currentPassword, newPassword, confirmPassword } = values;
    const { UserID, UserName } = isAuthenticated();

    const validateFormFields = () => {
        let isSuccess = true;
        let message = '';
        setSuccess('');
        setError('');

        if (newPassword !== confirmPassword) {
            setError('New Password and Confirm Password must be same!');
            isSuccess = false;
        }
        return isSuccess;
    };

    const submitFormHandler = (e) => {
        e.preventDefault();
        if (validateFormFields()) {
            setIsProcessing(true);
            changePassword({ UserID, UserName, UserOldPassword: currentPassword, UserPassword: newPassword })
                .then(data => {

                    //debugger;
                    //console.log("change password data", data);
                    if (Number(data.status.code) > 0) {
                        setSuccess(data.result);
                        setError('');
                    }
                    else {
                        setSuccess('');
                        setError(data.result)
                    }
                    setIsProcessing(false);
                    setValues({
                        ...values,
                        currentPassword: '',
                        newPassword: '',
                        confirmPassword: ''
                    })
                })
                .catch(err => {
                    console.log("change password error=", err);
                    setError("Error while changing password: ", err);
                })
        }
    };

    const handleTextBoxChange = (e) => {
        setValues({
            ...values,
            [e.target.id]: e.target.value
        })
    }

    const showChangePasswordForm = () => {

        return <form onSubmit={submitFormHandler} className="shadow-sm p-3 mt-3 mb-3 bg-white rounded">
            <div className="form-group">
                <label htmlFor="currentPassword" className="required">Current Password:</label>
                <input
                    type="password"
                    className="form-control"
                    id="currentPassword"
                    value={currentPassword}
                    placeholder="Enter current password"
                    onChange={handleTextBoxChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="newPassword" className="required">New Password: </label>
                <input type="password"
                    className="form-control"
                    id="newPassword"
                    value={newPassword}
                    placeholder="Enter new password"
                    onChange={handleTextBoxChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="confirmPassword" className="required">Re-enter New Password: </label>
                <input type="password"
                    className="form-control"
                    id="confirmPassword"
                    value={confirmPassword}
                    placeholder="Enter confirm password"
                    onChange={handleTextBoxChange} required />
            </div>

            <div className="form-group text-center">
                <button type="submit" className="btn btn-primary pl-2 pr-2">CHANGE PASSWORD</button>
                <button type="button" className="btn btn-primary ml-2 pl-2 pr-2" onClick={resetFormFields}>CLEAR TEXTBOXES</button>
            </div>
        </form>
    };

    const showErrorMessage = () => {
        return error.length === 0 ? ('') : (<div className="alert alert-danger m-0 p-2 text-center w-60">{error}</div>)
    };

    const showSuccessMessage = () => {
        return success.length === 0 ? ('') : (<div className="alert alert-success m-0 p-2 text-center w-60">{success}</div>)
    };

    const showProcessingMessage = () => {
        return isProcessing === false ? ('') : (<div className="alert alert-info m-0 p-2 text-center w-60">
            <Loading text="Processing ....." />
        </div>)
    };

    const resetFormFields = (e) => {
        e.preventDefault();
        setValues({
            currentPassword: '',
            newPassword: '',
            confirmPassword: ''
        })
    };

    return (
        <DashboardLayout title="Change your password">
            {/* <form onSubmit={submitFormHandler}> */}
            <div className="row d-flex text-left pl-4">
                <div className="col-12 p-1 m-0 mb-2 w-50 bg-page-title" style={{ marginLeft: "-20px !important", textTransform: "uppercase" }}>
                    <b>CHANGE PASSWORD</b>
                </div>
                <div className="col-12 p-0 m-0 w-100">
                    <div className="row m-0 p-0">
                        <div className="col-lg-3 col-xs-12">&nbsp;</div>
                        <div className="col-lg-6 col-xs-12">
                            {showChangePasswordForm()}
                            {showErrorMessage()}
                            {showSuccessMessage()}
                            {showProcessingMessage()}
                        </div>
                        <div className="col-lg-3 col-xs-12">&nbsp;</div>
                    </div>
                </div>
                {/* <pre>
                        {JSON.stringify(values, null, 5)}
                    </pre> */}
            </div>
            {/* </form> */}
        </DashboardLayout>
    );
}
