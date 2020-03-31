import React, { useState } from 'react';
import Layout from '../Layout';
import WorkinProgress from '../WorkInProgress';

function Downloads() {

    const show_card = () => {
        return (
            <div className="card bg-light mb-3">
                <div className="card-header bg-light text-dark text-uppercase">
                    <i className="fa fa-id-card mr-4"></i> <b>Prof. Sanatan Sahu </b>, Principal
				</div>
                <div className="card-body" style={{ backgroundColor: "#fff" }}>

                    <p className="address-text">
                        Phone (Mobile): +91 - 94375 14174
                    </p>
                    <p className="address-text">
                        Email: sahusanatana@yahoo.com
                    </p>

                </div>
            </div>
        )
    };

    return (
        <Layout title="Downloads">
            <div className="row" style={{ paddingBottom: "20px" }}>
                <WorkinProgress />
                <div className="col-lg-4 col-sm-12">
                    {/* {show_card()} */}
                </div>
                <div className="col-lg-4 col-sm-12">
                    {/* {show_card()} */}
                </div>
                <div className="col-lg-4 col-sm-12">
                    {/* {show_card()} */}
                </div>

            </div>
        </Layout>
    );
}

export default Downloads;