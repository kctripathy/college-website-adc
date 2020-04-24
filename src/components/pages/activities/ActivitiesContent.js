import React, { useState, useEffect } from 'react';
import Layout from '../Layout';
import titleCase from '../../commons/CommonFunctions';
import Loading from '../../commons/Loading';
import { useSelector, useDispatch } from 'react-redux';
import { EstbTypeCode } from '../../../constants/actionTypes';
import { fetchEstablishments } from '../../../actionMethods/estbActionMethods'
import ActivityContentRow from './ActivityContentRow'

export default function ActivitiesContent({ page }) {
    const estb = useSelector(state => state.estb);
    const dispatch = useDispatch();

    useEffect(() => {
        if (estb.establishments.length === 0)
            dispatch(fetchEstablishments());
    }, [page]);


    const loadContent = () => {

        let typeCode;
        switch (page) {
            case "academic-activities": typeCode = EstbTypeCode.RECENT_ACADEMIC_ACTIVITY; break;
            case "cultural-activities": typeCode = EstbTypeCode.RECENT_CULTURAL_ACTIVITY; break;
            case "social-activities": typeCode = EstbTypeCode.RECENT_SOCIAL_ACTIVITY; break;
            case "sports-activities": typeCode = EstbTypeCode.RECENT_SPORTS_ACTIVITY; break;
            case "youth-red-cross-activities": typeCode = EstbTypeCode.RECENT_YRC_ACTIVITY; break;
            case "red-ribbon-club-activities": typeCode = EstbTypeCode.RECENT_RRC_ACTIVITY; break;
            case "red-ribbon-club-activities": typeCode = EstbTypeCode.RECENT_RRC_ACTIVITY; break;
            case "national-service-scheme-activities": typeCode = EstbTypeCode.RECENT_NSS_ACTIVITY; break;
            case "the-bharat-scout-&-guide-activities": typeCode = EstbTypeCode.RECENT_SCOUTE_GUIDE_ACTIVIY; break;
            case "alumni-activities": typeCode = EstbTypeCode.RECENT_ALUMNI_ACTIVITY_ACTIVIY; break;
            default: typeCode = 'R'; break;
        };
        return estb.establishments
            .filter(e => e.EstbTypeCode === typeCode)
            .map(establishment => <ActivityContentRow key={establishment.EstbID} establishment={establishment} />)
    };

    // const showPageContent = () => {

    //     debugger;
    //     return state.establishments.filter(e => EstbTypeCode === typecode).map(r => <li key={r.EstbID}>---->{r.EstbTitle}</li>)
    // };
    return (
        <div className="row m-0 p-0">
            <div className="col-lg-2 col-sm-12">&nbsp;</div>
            <div className="col-lg-9 col-sm-12">
                {loadContent()}
            </div>
            <div className="col-lg-1 col-sm-12">&nbsp;</div>
        </div>
    );
}
