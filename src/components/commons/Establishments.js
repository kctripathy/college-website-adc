import React, { useEffect, useState, Fragment } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import moment from 'moment';
import Modal from 'react-modal';
import { EstbTypeCode } from '../../constants/actionTypes'
import { fetchEstablishments } from '../../actionMethods/estbActionMethods'
import Loading from './Loading';
import EstablishmentsDetail from '../commons/EstablishmentsDetail';
import Tabs from './Tabs';
//import EstablishmentModal from '../commons/EstablishmentModal'

import PDFImage from '../../assets/images/pdf_16x16.gif';
import PcitureImage from '../../assets/images/img_64x64.png';
import WordDocImage from '../../assets/images/word-icon.gif';
import titleCase, { isAnImage, isPDF, isDocument } from '../commons/CommonFunctions'
import { CORS_URL, WEB_URL } from '../../config';


const Establishments = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [totalRecordsToShow] = useState(7);
    const [estblmt, setEstblmt] = useState([]);
    const estb = useSelector(state => state.estb);
    const dispatch = useDispatch();

    useEffect(() => {
        if (estb.establishments.length === 0)
            dispatch(fetchEstablishments());
    }, []);

    const showEstablishmentDeails = (estblmt) => {
        console.log("showEstablishmentDeails > estblmt", estblmt)
        setEstblmt(estblmt);
        setIsOpen(true);
    }


    const closeEstablishmentDeailModal = () => {
        setIsOpen(false);
    }

    const showImageIcon = (filename) => {
        var url = "";
        if (filename.length > 0) {
            if (isAnImage(filename) === true) {
                return <a href={`${WEB_URL}/Documents/${filename}`} target='_blank'>
                    <img src={PcitureImage} alt={filename} style={{ height: "16px" }} />
                </a>;
            }
            else if ((isPDF(filename) === true)) {
                return <a href={`${WEB_URL}/Documents/${filename}`} target='_blank'>
                    <img src={PDFImage} alt={filename} style={{ height: "16px" }} />
                </a>;
            }
            else if ((isDocument(filename) === true)) {
                return <a href={`${WEB_URL}/Documents/${filename}`} target='_blank'>
                    <img src={WordDocImage} alt={filename} style={{ height: "16px" }} />
                </a>;
            }
        }
        return url
    }
    const showEstablishment = (typecode) => {
        var counter = 1;
        return estb.loading ? (<Loading text="Data retrival in progress..." />) : (
            <ul className="estb-head">
                {
                    estb.establishments &&
                    estb.establishments.length > 0 &&
                    estb.establishments
                        .filter((e) => e.EstbTypeCode.substring(0, 1) === typecode.substring(0, 1) && e.EstbStatusFlag === 'A')
                        .map(estb => {
                            counter = counter + 1;
                            if (counter > totalRecordsToShow && props.fromHomePage == true) return false;
                            return (
                                <li key={estb.EstbID}>
                                    <ul className="list-group m-0 p-0">
                                        <li className="list-group-item m-1 p-1 pl-2 shadow-xs">
                                            <div className="m-0 p-0 text-truncate" style={{ maxWidth: props.fromHomePage ? "500px" : "1000px" }}>
                                                <Link to={{
                                                    pathname: '/establishmentdetails',
                                                    state: {
                                                        establishment: estb
                                                    }
                                                }}>{estb.EstbTitleZone.toUpperCase()}</Link>
                                            </div>
                                            <div className="m-0 p-0">
                                                <small>
                                                    <small className="text-muted">
                                                        Date: {moment(estb.EstbDate).format("DD MMM YYYY HH:MM")}
                                                        <em>  ({moment(estb.EstbDate).fromNow()}</em>)

                                                    &nbsp;&nbsp;|&nbsp;&nbsp; By: <em>{estb.AuthorOrContributorName}</em>
                                                    </small>
                                                </small>
                                                <span className="d-block float-right mr-1">
                                                    {showImageIcon(estb.FileNameWithPath)}
                                                </span>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                            )
                        })
                }
                <li className="text-right pt-1 pr-1">
                    {
                        estb.establishments.length > 10 && props.fromHomePage === true ? (
                            <Link to={`/establishments/${typecode}`}>Show All..</Link>
                        ) : ('')
                    }
                </li>
            </ul >
        );
    }

    return (
        <Fragment>
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
                <div label="Activities">
                    {showEstablishment(EstbTypeCode.RecentActivities)}
                </div>
            </Tabs >
            {/* <EstablishmentModal isOpen={isOpen} establishment={estblmt} /> */}
            <Modal isOpen={isOpen}
                shouldCloseOnOverlayClick={true}
                onRequestClose={() => setIsOpen(false)}
                style={
                    {
                        overlay: { background: "rgba(255, 203, 5, 0.8)" }
                    }}>
                <EstablishmentsDetail establishment={estblmt} />
                <div className="row m-0 p-0 fixed-bottom mb-5">
                    <div className="col-12 m-0 p-0 text-center">
                        <button type="button"
                            className="btn btn-primary text-center p-1 m-1 btn-width-150"
                            onClick={() => setIsOpen(false)}>
                            <i className="fa fa-times mr-2"></i> CLOSE</button>
                    </div>
                </div>
            </Modal>
        </Fragment>
    )
};

export default Establishments;