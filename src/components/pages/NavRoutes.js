import React from 'react';
import { Route, Switch } from 'react-router-dom';


// import PrivateRoute from '../auth/PrivateRoute';
// import AdminRoute from '../auth/AdminRoute';
// import SuperAdminRoute from '../auth/SuperAdminRoute';

import Home from "../pages/home/Home";
import About from "../pages/about/About";
import PrincipalMessage from '../pages/PrincipalMessage'

import Publications from '../../components/pages/academics/Publications'

import AllEstablishments from './establishments/AllEstablishments';
import EstablishmentDetails from './establishments/EstablismentDetails';

import Books from './library/Books';
import Staffs from './staffs/Staffs'
import StaffDetails from './staffs/StaffDetails'

import Students from './students/Students';
import StudentDetails from './students/StudentDetails';

import Contact from './Contact';
import PageNotFound from '../pages/PageNotFound';

function NavRoutes() {
    return (
        <div>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/home" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/principal-message" component={PrincipalMessage} />
                <Route path="/establishments/:estbTypeCode" component={AllEstablishments} />
                <Route path="/establishmentdetails" component={EstablishmentDetails} />
                <Route path="/publications" component={Publications} exact />

                <Route path="/library" component={Books} exact />
                <Route path="/staffs" component={Staffs} exact />
                <Route path="/staffs/:id" component={StaffDetails} exact />
                <Route path="/students" component={Students} exact />
                <Route path="/students/:id" component={StudentDetails} exact />

                {/* <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/contact" component={Contact} />
                <Route path="/user/forgot-password" component={ForgotPassword} exact />
                <Route path="/user/change-password" component={ChangePassword} exact />
                <Route path="/user/reset-password/:authKey" component={ResetPassword} exact />

                <AdminRoute path="/admin/dashboard" component={AdminDashboard} exact />
                <AdminRoute path="/question/add" component={QuestionAdd} exact />
                <AdminRoute path="/questions/list" component={QuestionList} exact />
                <AdminRoute path="/question/edit/:questionId" component={QuestionEdit} exact />

                <AdminRoute path="/user/list" component={UserList} exact />
                <AdminRoute path="/user/add" component={UserAdd} exact />
                <AdminRoute path="/user/edit/:userId" component={UserEdit} exact />

                <AdminRoute path="/subjects/list" component={ClassSubjectsManagement} exact />


                <PrivateRoute path="/user/dashboard" component={UserDashboard} exact />
                <PrivateRoute path="/user/quiz/results" component={QuizResults} exact />
                <PrivateRoute path="/user/profile" component={Profile} exact />

                <SuperAdminRoute path="/SuperAdmin/dashboard" component={SuperAdminDashboard} exact />
                <SuperAdminRoute path="/account/add" component={AccountAdd} exact />
                <SuperAdminRoute path="/account/edit" component={AccountEdit} exact />
                <SuperAdminRoute path="/account/list" component={AccountList} exact /> */}

                <Route component={PageNotFound} />

            </Switch>
        </div>
    );
}

export default NavRoutes;