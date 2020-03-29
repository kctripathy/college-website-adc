import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';

//import { EstbTypeCode } from '../../commons/constants'
//import { useHttpGet } from '../../commons/useHttpGet';

import { EstbTypeCode } from '../../constants/actionTypes'
import { fetchEstablishments } from '../../actionMethods/estbActionMethods'
import Loading from './Loading';
import Tabs from './Tabs';



const Publications = () => {
    //const [isLoading, publications] = useHttpGet('establishments')

    const estb = useSelector(state => state.estb);
    const dispatch = useDispatch();


    //console.log("estb=", estb);
    useEffect(() => {
        debugger;
        if (estb.establishments.length === 0)
            dispatch(fetchEstablishments());
    }, []);

    const showPublication = (typecode) => {
        return estb.loading ? (<Loading />) : (
            <ul className="publ-head">
                {
                    estb.establishments.filter(e => e.EstbTypeCode === typecode).map(estb => {
                        return (
                            <li key={estb.EstbID}>
                                <ul className="publ">
                                    <li>
                                        <small>Published:</small>
                                        {new Date(estb.EstbDate).toShortFormat()}
                                        {/* {moment(estb.EstbDate).fromNow()} */}
                                    </li>
                                    <li>
                                        {estb.EstbTitleZone}
                                    </li>
                                    <li>
                                        <Link to={`/notice/${estb.EstbID}`} target="_blank">View</Link>
                                    </li>
                                </ul>
                            </li>
                        )
                    })
                }
            </ul>
        );
    }

    return (
        <Tabs initActiveTabIndex="0">
            <div label="Articles">
                {showPublication(EstbTypeCode.Article)}
            </div>
            <div label="Projects">
                {showPublication(EstbTypeCode.ProjectPaper)}
            </div>
            <div label="Awards">
                {showPublication(EstbTypeCode.AwardAchievment)}
            </div>
            <div label="Seminar">
                {showPublication(EstbTypeCode.SeminarPaper)}
            </div>
            <div label="Book/Proceedings">
                {showPublication(EstbTypeCode.BookProceeding)}
            </div>
        </Tabs>

    )
};

export default Publications;