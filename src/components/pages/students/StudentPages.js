import React from 'react';
import Layout from '../Layout';
import titleCase from '../../commons/CommonFunctions';

export default function StudentPages({ match }) {
    return (
        <Layout title={`Students ${titleCase(match.params.page.replace("-", " "))}`}>
            <p className="w-100 mt-5 text-center font-bold">Work in progress ...</p>
        </Layout>
    );
}
