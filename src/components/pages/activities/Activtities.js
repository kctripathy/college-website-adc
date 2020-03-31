import React from 'react';
import Layout from '../Layout';
import titleCase from '../../commons/CommonFunctions';
import WorkinProgress from '../WorkInProgress';

export default function Activities({ match }) {
    return (
        <Layout title={`Activities >> ${titleCase(match.params.page.replace(/-/g, " "))}`}>
            <WorkinProgress />
        </Layout>
    );
}
