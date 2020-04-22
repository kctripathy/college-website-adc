import React, { useState } from 'react';
import Modal from 'react-modal';
import Header from './Header';
import NavBar from './NavBar';
// import Menu from './Menu';
import NavRoutes from './NavRoutes';
import Footer from './Footer';

import { WEB_URL } from '../../config';

Modal.setAppElement("#root");

function Main() {
    const [run, setRun] = useState(false);
    const changeHeader = () => {
        //console.log('header chaged...');
        setRun(!run);
    }

    console.log('WEB_URL=', WEB_URL);

    return (
        <div>
            <Header onHeaderChage={changeHeader} />
            <NavBar />
            {/* <Menu /> */}
            <NavRoutes />
            <Footer />
        </div>
    );
}

export default Main;