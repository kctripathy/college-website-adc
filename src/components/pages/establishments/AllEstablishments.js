import React, { useState, useEffect } from 'react';
import Layout from '../Layout';
import Establishments from '../../commons/Establishments'

const AllEstablishments = (props) => {

    const getIndex = () => {
        switch (props.match.params.estbTypeCode) {
            case "N":
                return (0);
                break;
            case "T":
                return (1);
                break;
            case "C":
                return (2);
                break;
            case "R":
                return (3);
                break;
            default:
                return (0);
                break;
        };
    }

    return (
        <Layout title="Establishments">
            <Establishments fromHomePage={false} activeIndex={getIndex()} />
        </Layout>
    )
};

export default AllEstablishments;