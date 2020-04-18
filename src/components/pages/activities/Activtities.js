import React from 'react';
import Layout from '../Layout';
import titleCase from '../../commons/CommonFunctions';
import WorkinProgress from '../WorkInProgress';
import ActivitiesContent from './ActivitiesContent'

export default function Activities({ match }) {
    return (
        <Layout title={`${titleCase(match.params.page.replace(/-/g, " "))}`}>
            {/* <WorkinProgress /> */}
            <ActivitiesContent page={match.params.page} />
        </Layout>
    );
}
