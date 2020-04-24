import React, { useState } from 'react';
import Layout from '../Layout';
import WorkinProgress from '../WorkInProgress';
import HolidayList from './HolidayList';
import GoverningBody from './GoverningBody';
import titleCase from '../../commons/CommonFunctions';

function Administration({ match }) {

    const show_section = () => {
        switch (match.params.section) {
            case 'holiday-list': return <HolidayList />; break;
            case 'governing-body': return <GoverningBody />; break;
            default: return <WorkinProgress />
        }
    }
    return (
        <Layout title={`${titleCase(match.params.section.replace("-", " "))}`}>
            <div className="row">
                <div className="col-lg-2 col-sm-12">
                    &nbsp;
                </div>
                <div className="col-lg-4 col-sm-12">
                    {show_section()}
                </div>
                <div className="col-lg-2 col-sm-12">
                    &nbsp;
                </div>

            </div>
        </Layout>
    );
}

export default Administration;