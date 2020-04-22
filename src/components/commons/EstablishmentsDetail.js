import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { Document, Page, pdfjs } from "react-pdf";
import { CORS_URL, WEB_URL } from '../../config';
import titleCase, { isAnImage, isPDF, isDocument } from '../commons/CommonFunctions'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const EstablishmentsDetail = ({ establishment }) => {

    const [pageNumber, setPageNumber] = useState(1)

    const loadDocument = (type) => {
        debugger;
        switch (type) {
            case 'img': return (
                <img
                    src={`${WEB_URL}/Documents/${establishment.FileNameWithPath}`}
                    alt={establishment.FileNameWithPath}
                    className="img img-responsive img-fluid w-auto"
                    style={{ maxHeight: "500px" }} />); break;
            case 'pdf':
                return (
                    <Document
                        file={{ url: `${CORS_URL}/${WEB_URL}/Documents/${establishment.FileNameWithPath}` }}
                    //onLoadSuccess={onDocumentLoadSuccess}
                    //onLoadFailure={onDocumentLoadFailure}
                    //onLoadError={console.error}
                    >
                        <Page size="A4" pageNumber={pageNumber} style={{ border: "solid 2px red", width: "100%" }}>

                        </Page>
                    </Document>
                ); break;
            case 'doc': return (
                <a href={`${WEB_URL}/Documents/${establishment.FileNameWithPath}`} target="_blank">
                    View Documnent
                </a>
            ); break;
            default: return "";
        }
    }

    const printDescription = (text) => (

        <div className="line-break-1">---->{text}</div>

        //<div>{text.replace('\n', '<br/>')}</div>
        // text.split("\n").map((i, key) => {
        //     return <p key={key}>{i}</p>;
        // })

    )
    const showEstablishment = () => {
        return establishment &&
            <div className="col-12 text-center">
                <h5 className="bg-modal-page-title w-100 text-left text-uppercase">
                    {establishment.EstbTypeCodeDesc}
                </h5>
                <div className="row">
                    <div className="col-lg-6 col-sm-12 text-justify">
                        <small className="mr-4"><b>{titleCase(establishment.EstbTypeCodeDesc)}
                        Date:</b>&nbsp; {moment(establishment.EstbDate).format('LLLL')} ({moment(establishment.EstbDate).fromNow()})</small>
                        <br />
                        <small className="mr-4"><b>Added By:</b>&nbsp; {establishment.AuthorOrContributorName}</small>
                        <hr />
                        <h6>{establishment.EstbTitle}</h6>


                        {establishment.EstbTitle === establishment.EstbDescription ? '' : establishment.EstbDescription}

                    </div>


                    <div className="col-lg-6 col-sm-12 text-center">

                        {isAnImage(establishment.FileNameWithPath) ?
                            (loadDocument('img')) :
                            (isPDF(establishment.FileNameWithPath) ?
                                (loadDocument('pdf')) : (
                                    isDocument(establishment.FileNameWithPath) ?
                                        loadDocument('doc') : ('')))}

                    </div>

                </div>
            </div>
    }
    return (
        //<LayoutModalPopup title="Establishments">
        <div className="row">
            {showEstablishment()}
        </div>
        //</LayoutModalPopup>
    );
}

export default EstablishmentsDetail;
