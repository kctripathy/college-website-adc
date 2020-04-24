import React from 'react';
import Layout from '../Layout';
import titleCase from '../../commons/CommonFunctions';
import Alumni from '../../alumni/Alumni';
import Achievements from './Achievements';

export default function StudentPages({ match }) {

    const showStudentPage = () => {
        switch (match.params.page) {
            case "alumni": return <Alumni />; break;
            case "achievement": return <Achievements />; break;
            default: break;
        }
    }
    return (
        <Layout title={`${titleCase(match.params.page.replace("-", " "))}`}>
            {/* <p className="w-100 mt-5 text-center font-bold">Work in progress ...</p> */}
            <div className="row m-0 p-0">
                <div className="col-lg-1 col-sm-12"></div>
                <div className="col-lg-10 col-sm-12">
                    {showStudentPage()}
                </div>
                <div className="col-lg-1 col-sm-12"></div>
            </div>
        </Layout>
    );
}
