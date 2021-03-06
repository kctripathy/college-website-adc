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
import StaffDetails from './staffs/StaffDetails'

import Students from './students/Students';
import StudentPages from './students/StudentPages';
import StudentsUnion from './students/StudentsUnion';

import CollegeAdmin from './college-admin/Administration';
import UsefullDownloads from './downloads/Downloads';

import PhotoGallery from './gallery/PhotoGallery';
import VideoGallery from './gallery/VideoGallery';

import Contact from './Contact';
import Login from './users/Login';

import AdminDashboard from '../admin/AdminDashboard';
import StaffDashboard from '../pages/staffs/StaffDashboard';
import StudentDashboard from '../pages/students/StudentDashboard';

import UserProfile from '../pages/users/UserProfile';
import MediaRelease from './MediaRelease';
import RTI from './RTI';

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
                <Route path="/admin/:section" component={CollegeAdmin} />
                <Route path="/downloads" component={UsefullDownloads} />
                <Route path="/gallery/photo" component={PhotoGallery} />
                <Route path="/gallery/video" component={VideoGallery} />
                <Route path="/media-release" component={MediaRelease} />
                <Route path="/contact" component={Contact} />
                <Route path="/rti" component={RTI} />
                <Route path="/login" component={Login} />

                <AdminRoute path="/admin/dashboard" component={AdminDashboard} exact />
                <StaffRoute path="/staff/dashboard" component={StaffDashboard} exact />
                <StudentRoute path="/student/dashboard" component={StudentDashboard} exact />
                <PrivateRoute path="/user/profile" component={UserProfile} exact />

                <Route component={PageNotFound} />

            </Switch>
        </div>
    );
}

export default NavRoutes;