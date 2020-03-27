import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import moment from 'moment';
import { EstbTypeCode } from '../../constants/actionTypes'

import { fetchEstablishments } from '../../actionMethods/estbActionMethods'
import Loading from './Loading';
import Tabs from './Tabs';


const Establishments = (props) => {
    const estb = useSelector(state => state.estb);
    const dispatch = useDispatch();

    useEffect(() => {
        if (estb.establishments.length === 0)
            dispatch(fetchEstablishments());
    }, []);


    const showEstablishment = (typecode) => {
        var counter = 1;
        return estb.loading ? (<Loading text="Data retrival in progress..." />) : (
            <ul className="estb-head">
                {
                    estb.establishments
                        .filter((e) => e.EstbTypeCode === typecode)
                        .map(estb => {
                            counter = counter + 1;
                            if (counter > 10 && props.fromHomePage == true) return false;
                            return (
                                <li key={estb.EstbID}>
                                    <ul className="estb">
                                        <li>
                                            {/* {estb.EstbDate} */}
                                            {new Date(estb.EstbDate).toShortFormat()}<br />
                                            {/* <small className="text-muted" style={{ marginTop: "-4px" }}><em>{moment(estb.EstbDate).fromNow()}</em></small> */}
                                        </li>
                                        <li>
                                            {/* <Link to={`/establishments/${estb.EstbID}`} >
                                            {estb.EstbTitleZone}
                                        </Link> */}
                                            {/* <Link to={{ pathname: `/establishments/${estb.EstbID}`, establishment: estb }}>
                                            {estb.EstbTitleZone}
                                        </Link> */}
                                            <Link to={{
                                                pathname: '/establishmentdetails',
                                                state: {
                                                    establishment: estb
                                                }
                                            }}>{estb.EstbTitleZone}</Link>
                                        </li>
                                        <li>
                                            {/* <Link to={`/notice/${estb.EstbID}`} target="_blank">View</Link> */}
                                        </li>
                                    </ul>
                                </li>
                            )
                        })
                }
                <li className="text-right">
                    {
                        estb.establishments.length > 10 && props.fromHomePage === true ? (
                            <Link to={`/establishments/${typecode}`}>Show All..</Link>
                        ) : ('')
                    }
                </li>
            </ul >
        );
    }
    //console.log("props.activeIndex=", props.activeIndex);

    return (
        <Tabs initActiveTabIndex={props.activeIndex}>
            <div label="Notice">
                {showEstablishment(EstbTypeCode.Notice)}
            </div>
            <div label="Tender">
                {showEstablishment(EstbTypeCode.Tender)}
            </div>
            <div label="Circulars">
                {showEstablishment(EstbTypeCode.Circular)}
            </div>
            {/* <div label="Syllabus">
                {showEstablishment('S')}
            </div> */}
            <div label="Activities">
                {showEstablishment(EstbTypeCode.RecentActivities)}
            </div>
        </Tabs >

    )
};

export default Establishments;