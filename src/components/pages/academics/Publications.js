import React, { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from "react-redux";
import moment from 'moment';
import { Link } from 'react-router-dom';
import { EstbTypeCode } from '../../../constants/actionTypes'
import { fetchEstablishments } from '../../../actionMethods/estbActionMethods'
import Loading from '../../commons/Loading';
import Tabs from '../../commons/Tabs';
//import Layout from '../Layout';
import './Publications.css';
import PDFImage from '../../../assets/images/pdf_16x16.gif'
import { CORS_URL, WEB_URL } from '../../../config';


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
                                    {/* <li className="list-item">
                                        {new Date(estb.EstbDate).toShortFormat()}<br />
                                    </li> */}
                                    <li className="list-item">
                                        {estb.EstbTitleZone}<br />
                                        <em><small><small>Published Date: {moment(estb.EstbDate).format('LLLL')} ({moment(estb.EstbDate).fromNow()})</small></small></em>
                                    </li>
                                    <li className="list-item" >
                                        {/* <Link to={`/notice/${estb.EstbID}`} target="_blank">
                                        </Link> */}
                                        {estb.FileNameWithPath.length === 0 ? ('') : (
                                            <a href={`${WEB_URL}/Documents/${estb.FileNameWithPath}`} target="_blank">
                                                View File
                                                <img src={PDFImage} style={{ float: "right" }} alt={estb.EstbTitle} />
                                            </a>
                                        )}
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

        <Fragment>
            <div className="row mt-2 mb-2 pb-2">
                <div className="col-lg-1">&nbsp;</div>
                <div className="col-10">
                    <p>The aims of College Publications are:</p>
                    <ul>
                        <li>
                        To provide a forum for students and faculty to express their views and insights on subject-related and general topics.                        
                        </li>
                        <li>
                            To publish books that can be purchased at reasonable prices, making information accessible to all.
                        </li>
                        <li>
                            To show that academics no longer need to be controlled by commercial interests!
                        </li>
                    </ul>
                    <p>
                    The college has a publication cell headed by the chief Editor. The Editorial board has an Editor and a team of Associate Editors. Due representation is given to student Editors in the Board.
                                        Main Publications of the College are:
                        
                    </p>


                </div>
                <div className="col-lg-1">&nbsp;</div>
            </div>

            <div className="row">
                <div className="col-lg-1">&nbsp;</div>
                <div className="col-lg-10">
                    <Tabs initActiveTabIndex="0">
                        <div label="Articles or Columns">
                            {showPublication(EstbTypeCode.PUBLICATION_ARTICLE_COLUMN)}
                        </div>
                        <div label="Project Papers">
                            {showPublication(EstbTypeCode.PUBLICATION_PROJECT_PAPER)}
                        </div>
                        {/* <div label="Awards">
                        {showPublication(EstbTypeCode.AwardAchievment)}
                    </div> */}
                        <div label="Seminar Papers">
                            {showPublication(EstbTypeCode.PUBLICATION_SEMINAR_PAPER)}
                        </div>
                        <div label="Books or Proceedings">
                            {showPublication(EstbTypeCode.PUBLICATION_BOOK_PROCEEDINGS)}
                        </div>

                        <div label="Study Materials">
                            {showPublication(EstbTypeCode.PUBLICATION_STUDY_MATERIAL)}
                        </div>
                        {/* <div label="Literatures">
                        {showPublication(EstbTypeCode.BookProceeding)}
                    </div> */}

                    </Tabs>
                </div>
                <div className="col-lg-1">&nbsp;</div>
            </div>
        </Fragment>
    )
};

export default Publications;