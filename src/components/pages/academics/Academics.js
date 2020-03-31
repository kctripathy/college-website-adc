import React from 'react';
import Layout from '../Layout';
import titleCase from '../../commons/CommonFunctions';
import WorkinProgress from '../WorkInProgress';

export default function Academics({ match }) {
    return (
        <Layout title={`Academics >> ${titleCase(match.params.page.replace(/-/g, " "))}`}>
            <WorkinProgress />
        </Layout>
    );
}
