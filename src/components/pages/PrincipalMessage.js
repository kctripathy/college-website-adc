import React from 'react';
import ThePrincipalMessage from '../commons/PrincipalMessage';

import Layout from './Layout';

function PrincipalMessage() {
    return (
        <Layout>
            <div className="row m-0 p-0">
                <div className="col-lg-3 col-sm-1">&nbsp;</div>
                <div className="col-lg-6 col-sm-10"><ThePrincipalMessage fromHomePage={false} /> </div>
                <div className="col-lg-3 col-sm-1">&nbsp;</div>
            </div>
        </Layout>
    );
}

export default PrincipalMessage;