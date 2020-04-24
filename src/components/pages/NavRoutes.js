import React from 'react';
import { Route, Switch } from 'react-router-dom';


import AdminRoute from '../../auth/AdminRoute'
import StudentRoute from '../../auth/StudentRoute';
import StaffRoute from '../../auth/StaffRoute';
import PrivateRoute from '../../auth/PrivateRoute';

import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Profile from '../pages/about/Profile';
import Academics from "../pages/academics/Academics";
import Activities from "../pages/activities/Activtities";
import PrincipalMessage from '../pages/PrincipalMessage'

import Publications from '../../components/pages/academics/Publications'

import AllEstablishments from './establishments/AllEstablishments';
import EstablishmentDetails from './establishments/EstablismentDetails';

import Books from './library/Books';
import Staffs from './staffs/Staffs'
import UserProfilePhotoUpload from './users/UserProfilePhotoUpload'
import StaffDetails from './staffs/StaffDetails'

import Students from './students/Students';
import StudentPages from './students/StudentPages';
import StudentsUnion from './students/StudentsUnion';

import CollegeAdmin from './college-admin/Administration';
import UsefullDownloads from './downloads/Downloads';

import ImageGallery from './gallery/ImageGallery';
import VideoGallery from './gallery/VideoGallery';
import MediaGallery from './gallery/MediaGallery';

import Contact from './Contact';
import Login from './users/Login';

import AdminDashboard from '../admin/AdminDashboard';
import AdminManageEstablishments from '../admin/AdminManageEstablishments';
import AdminAddEstablishment from '../admin/AdminAddEstablishment';

import StaffDashboard from '../pages/staffs/StaffDashboard';
import StudentDashboard from '../pages/students/StudentDashboard';

import UserProfile from '../pages/users/UserProfile';
import RTI from './RTI';

import UserAddActivity from './users/UserAddActivity';
import UserAddPublication from './users/UserAddPublication';
import UserViewActivities from './users/UserViewActivities';
import UserViewPublications from './users/UserViewPublications';

import UserSubmitFeedback from './users/UserSubmitFeedback';
import UserChangePassword from './users/UserChangePassword';
import UserForgotPassword from './users/UserForgotPassword';

import PageNotFound from '../pages/PageNotFound';

function NavRoutes() {


    return (
        <div>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/home" component={Home} />
                <Route path="/about" component={About} exact />
                <Route path="/about/profile" component={Profile} exact />
                <Route path="/about/principal-message" component={PrincipalMessage} exact />

                <Route path="/academic/:page" component={Academics} />
                <Route path="/activities/:page" component={Activities} />

                <Route path="/establishments/:estbTypeCode" component={AllEstablishments} />
                <Route path="/establishmentdetails" component={EstablishmentDetails} />
                <Route path="/publications" component={Publications} exact />
                <Route path="/students" component={Students} exact />
                <Route path="/students/union" component={StudentsUnion} exact />
                <Route path="/students/:page" component={StudentPages} exact />

                <Route path="/staffs" component={Staffs} exact />

                <Route path="/library" component={Books} exact />
                <Route path="/admin/:section" component={CollegeAdmin} exact />
                <Route path="/downloads" component={UsefullDownloads} exact />
                <Route path="/gallery/photo" component={ImageGallery} exact />
                <Route path="/gallery/video" component={VideoGallery} exact />
                <Route path="/gallery/media" component={MediaGallery} exact />
                <Route path="/contact" component={Contact} />
                <Route path="/rti" component={RTI} />
                <Route path="/login" component={Login} />

                <AdminRoute path="/administration/dashboard" component={AdminDashboard} exact />
                <AdminRoute path="/administration/establishment/:page" component={AdminAddEstablishment} exact />
                <AdminRoute path="/administration/establishments/manage" component={AdminManageEstablishments} exact />
                <AdminRoute path="/administration/establishments/manage/:page" component={AdminManageEstablishments} exact />

                <StaffRoute path="/staff/dashboard" component={StaffDashboard} exact />


                <StudentRoute path="/student/dashboard" component={StudentDashboard} exact />
                <PrivateRoute path="/user/profile" component={UserProfile} exact />
                <PrivateRoute path="/user/upload-profile-photo" component={UserProfilePhotoUpload} exact />

                <PrivateRoute path="/user/add-activity/:UserType/:UserReferenceID" component={UserAddActivity} exact />
                <PrivateRoute path="/user/add-publication/:UserType/:UserReferenceID" component={UserAddPublication} exact />
                <PrivateRoute path="/user/view-activities/:UserType/:UserReferenceID" component={UserViewActivities} exact />
                <PrivateRoute path="/user/view-publications/:UserType/:UserReferenceID" component={UserViewPublications} exact />

                <PrivateRoute path="/user/feedback/:UserType/:UserReferenceID" component={UserSubmitFeedback} exact />
                <PrivateRoute path="/user/change-password" component={UserChangePassword} exact />
                <Route path="/user/forgot-password" component={UserForgotPassword} exact />

                <Route component={PageNotFound} />

            </Switch>
        </div>
    );
}

export default NavRoutes;