import React, { useState } from 'react';
import { Document, Page, pdfjs } from "react-pdf";
// import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import moment from 'moment';
import Layout from '../Layout';
import { CORS_URL, WEB_URL } from '../../../config';
import titleCase, { isAnImage, isPDF, isDocument } from '../../commons/CommonFunctions'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const EstablishmentDetails = (props) => {
    const [pageNumber, setPageNumber] = useState(1)
    const { establishment } = props.location.state;

    const onDocumentLoadSuccess = () => {
        //alert("load success")
    };

    const onDocumentLoadFailure = () => {
        //alert("failed..")
    }

    const onLoadError = () => {
        // console.log("aaa");
        // alert("err")
    }

    // const styles = StyleSheet.create({
    //     page: { backgroundColor: 'tomato' },
    //     section: { color: 'white', textAlign: 'center', margin: 30 }
    // });


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

        //<div>{text.replace('\n', '<br/>')}</div>
        text.split("\n").map((i, key) => {
            return <p key={key}>{i}</p>;
        })

    )

    const showEstablishment = () => {
        return establishment &&
            <div className="col-12 text-center">
                <div className="row mt-2 ml-2">
                    <div className="col-lg-6 col-xs-12 col-sm-12 text-justify">
                        {/* <h5>{titleCase(establishment.EstbTypeCodeDesc)}</h5> */}
                        <small className="mr-4"><b> Date:</b>&nbsp; {moment(establishment.EstbDate).format('LLLL')} ({moment(establishment.EstbDate).fromNow()})</small>
                        <br />
                        <small className="mr-4"><b>Added By:</b>&nbsp; {establishment.AuthorOrContributorName}</small>
                        <hr />
                        <h6>{establishment.EstbTitle}</h6>
                        {establishment.EstbTitle === establishment.EstbDescription ? '' : (printDescription(establishment.EstbDescription))}


                        {/* <h4>{establishment.EstbTypeCodeDesc}</h4>
                        <strong>{new Date(establishment.EstbDate).toShortFormat()}</strong>
                        <hr />
                        <h6>{establishment.EstbTitle}</h6>
                        <p>{establishment.EstbTitle === establishment.EstbDescription ? '' : printDescription(establishment.EstbDescription)}</p> */}
                    </div>
                    <div className="col-lg-6 col-xs-12 col-sm-12 text-center">

                        {isAnImage(establishment.FileNameWithPath) ?
                            (loadDocument('img')) :
                            (isPDF(establishment.FileNameWithPath) ?
                                (loadDocument('pdf')) : (
                                    isDocument(establishment.FileNameWithPath) ?
                                        loadDocument('doc') : ('')))}

                        {/* <Document
                            file={{ url: `${CORS_URL}/${WEB_URL}/Documents/${establishment.FileNameWithPath}` }}
                            onLoadSuccess={onDocumentLoadSuccess}
                            onLoadFailure={onDocumentLoadFailure}
                            onLoadError={console.error}>
                            <Page size="A4" pageNumber={pageNumber} style={{ border: "solid 2px red", width: "100%" }}>

                            </Page> */}

                        {/* <Page size="A4" style={styles.page}>
                                <View style={styles.section}>
                                    <Text>Section #1</Text>
                                </View>
                            </Page> */}
                        {/* </Document> */}
                    </div>

                </div>
            </div >
    }
    return (
        <Layout title={`${establishment.EstbTypeCodeDesc}`}>
            <div className="row">
                {showEstablishment()}
            </div>
        </Layout>
    );
}

export default EstablishmentDetails;
