import React, { useState } from 'react';
import Header from './Header';
import NavBar from './NavBar';
// import Menu from './Menu';
import NavRoutes from './NavRoutes';
import Footer from './Footer';


function Main() {
    const [run, setRun] = useState(false);

    const changeHeader = () => {
        console.log('header chaged...');

        setRun(!run);
    }
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