import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import moment from 'moment';
import { Link } from 'react-router-dom';
import { EstbTypeCode } from '../../../constants/actionTypes'
import { fetchEstablishments } from '../../../actionMethods/estbActionMethods'
import Loading from '../../commons/Loading';
import Tabs from '../../commons/Tabs';
import Layout from '../Layout';
import './Publications.css';


const Publications = () => {

    const estb = useSelector(state => state.estb);
    const dispatch = useDispatch();

    useEffect(() => {
        if (estb.establishments.length === 0)
            dispatch(fetchEstablishments());
    }, []);

    const showPublication = (typecode) => {
        return estb.loading ? (<Loading />) : (
            <ul className="publications-heading">
                {
                    estb.establishments.filter(e => e.EstbTypeCode === typecode).map(estb => {
                        return (
                            <li key={estb.EstbID}>
                                <ul className="publications">
                                    <li>
                                        {/* <span>Publication Date:</span> */}
                                        {new Date(estb.EstbDate).toShortFormat()}<br />
                                        <small>({moment(estb.EstbDate).fromNow()})</small>
                                    </li>
                                    <li>
                                        {estb.EstbTitleZone}
                                    </li>
                                    <li>
                                        <Link to={`/notice/${estb.EstbID}`} target="_blank">
                                            <i className="fa fa-file-pdf-o"></i> View Pdf
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        )
                    })
                }
            </ul >
        );
    }

    return (
        <Layout title="Publications">
            <div className="row">
                <div className="col-lg-2">&nbsp;</div>
                <div className="col-lg-8">
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
                        <div label="Seminar Papers">
                            {showPublication(EstbTypeCode.SeminarPaper)}
                        </div>
                        <div label="Book/Proceedings">
                            {showPublication(EstbTypeCode.BookProceeding)}
                        </div>

                        <div label="Research Papers">
                            {showPublication(EstbTypeCode.BookProceeding)}
                        </div>
                        <div label="Literatures">
                            {showPublication(EstbTypeCode.BookProceeding)}
                        </div>

                    </Tabs>
                </div>
                <div className="col-lg-2">&nbsp;</div>
            </div>
        </Layout>
    )
};

export default Publications;