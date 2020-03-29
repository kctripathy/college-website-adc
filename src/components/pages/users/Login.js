import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { useDispatch } from "react-redux";

import './Login.css'
import Layout from '../Layout';
import { login, authenticate, isAuthenticated } from '../../../api/user';
import { userLoginSuccess, userLoginFailure } from '../../../actionMethods/userActionMethods';

function Login() {
    const dispatch = useDispatch();
    const [values, setValues] = useState({
        UserName: 'TSDC0204',
        UserPassword: '12345',
        loading: false,
        error: '',
        redirectToReferer: ''
    })

    const user = isAuthenticated();

    const { UserName, UserPassword, error, loading, redirectToReferer } = values;

    const handleOnChange = name => (e) => {
        setValues({
            ...values,
            [name]: e.target.value
        })
    };


    const handleFormSubmit = e => {
        e.preventDefault();
        setValues({ ...values, error: false, loading: true });
        login({ UserName, UserPassword })
            .then(data => {
                //console.log("data:", data);
                //debugger;
                if (data === undefined) {
                    dispatch(userLoginFailure());
                    setValues({ ...values, error: 'Some error occured!', loading: false })
                }
                else if (data.error) {
                    dispatch(userLoginFailure());
                    setValues({ ...values, error: data.error, loading: false })
                }
                else {
                    if (data.status && data.status.code && data.status.code < 0) {
                        dispatch(userLoginFailure());
                        setValues({ ...values, error: data.status.message, loading: false })
                    }
                    else {

                        authenticate(data, () => {
                            //debugger;
                            dispatch(userLoginSuccess(data[0]));
                            setValues({
                                ...values,
                                redirectToReferer: "/",
                                error: '',
                                loading: false
                            })
                        })
                    }

                }
            })
    };

    const showError = () => (
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    );

    const showLoading = () => (
        <div className="alert alert-info" style={{ display: loading ? '' : 'none' }}>
            Loading....
        </div>
    );

    const redirectUser = () => {
        //debugger;
        if (redirectToReferer) {
            if (user && user.RoleID === 1) //admin
                return <Redirect to="/admin/dashboard" />
            else if (user && (user.RoleID === 2 || user.RoleID === 3)) //staffs
                return <Redirect to="/staff/dashboard" />
            else if (user && user.RoleID === 4)
                return <Redirect to="/student/dashboard" />
            else
                return <Redirect to="/" />
        }
    }


    const loginForm = () => (
        <form onSubmit={handleFormSubmit}>
            <div className="card border-text-muted rounded-0 mt-4">
                <div className="card-header p-0">
                    <div className="bg-card-header text-dark text-left ml-2 pt-2">
                        <h5>Login</h5>
                    </div>
                </div>
                <div className="card-body p-3">
                    <div className="form-group">
                        <div className="input-group mb-2">
                            <div className="input-group-prepend">
                                <div className="input-group-text user-additional-info-label">
                                    <i className="fa fa-user text-adc mr-2"></i>
                                    User Name:
                                </div>
                            </div>
                            <input type="text" className="form-control"
                                id="UserName"
                                name="UserName"
                                value={UserName}
                                onChange={handleOnChange('UserName')}
                                placeholder="Enter your user name" required />
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="input-group mb-2">
                            <div className="input-group-prepend">
                                <div className="input-group-text user-additional-info-label">
                                    <i className="fa fa-key text-adc mr-2"></i>
                                    Password:
                                </div>
                            </div>
                            <input type="password" className="form-control"
                                id="UserPassword"
                                name="UserPassword"
                                value={UserPassword}
                                onChange={handleOnChange('UserPassword')}
                                placeholder="Enter your password" required />
                        </div>
                    </div>
                    <div className="col-12 text-center">
                        <input type="submit" value="LOGIN" className="btn btn-primary pl-4 pr-4 mr-2" />
                    </div>
                    <div className="col-12">
                        <div className="row">
                            <div className="col-lg-6 col-xs-12 text-left">
                                <Link className="p-4 m-4" to="/user/forgot-password">Forgot Password?</Link>
                            </div>
                            <div className="col-lg-6 col-xs-12 text-right">
                                <Link className="p-4 m-4" to="/register">New User? Register</Link>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </form>
    );
    return (
        <Layout>
            <div className="row">
                <div className="col-lg-3 col-sm-12">
                </div>
                <div className="col-lg-6 col-sm-12 col-xs-12">
                    {showError()}
                    {showLoading()}
                    {loginForm()}
                    {redirectUser()}
                </div>
                <div className="col-lg-3 col-sm-12">
                </div>
            </div>
        </Layout>
    );
}

export default Login;