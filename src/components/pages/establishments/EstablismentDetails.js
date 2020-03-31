import React, { useState } from 'react';
import { Document, Page, pdfjs } from "react-pdf";
// import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import Layout from '../Layout';
import { CORS_URL, APP_WEB_URL } from '../../../config';

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

    const showEstablishment = () => {
        return establishment &&
            <div className="col-12 text-center">
                <div className="row">
                    <div className="col-12 text-center">
                        <h4>{establishment.EstbTypeCodeDesc}</h4>
                        <strong>{new Date(establishment.EstbDate).toShortFormat()}</strong>
                        <hr />
                        <h6>{establishment.EstbTitle}</h6>
                        <p>{establishment.EstbTitle === establishment.EstbDescription ? '' : establishment.EstbDescription}</p>
                    </div>
                </div>
                {/* file={{ url: `https://cors-anywhere.herokuapp.com/http://tsdcollege.in/Documents/${establishment.FileNameWithPath}` }} */}

                <div className="row">
                    <div className="col-3">.</div>
                    <div className="col-6 text-center">
                        <Document
                            file={{ url: `${CORS_URL}/${APP_WEB_URL}/Documents/${establishment.FileNameWithPath}` }}
                            onLoadSuccess={onDocumentLoadSuccess}
                            onLoadFailure={onDocumentLoadFailure}
                            onLoadError={console.error}>
                            <Page size="A4" pageNumber={pageNumber} style={{ border: "solid 2px red", width: "100%" }}>

                            </Page>

                            {/* <Page size="A4" style={styles.page}>
                                <View style={styles.section}>
                                    <Text>Section #1</Text>
                                </View>
                            </Page> */}
                        </Document>
                    </div>
                    <div className="col-3">.</div>

                </div>
            </div>
    }
    return (
        <Layout title="Establishments">
            <div className="row">
                {showEstablishment()}
            </div>
        </Layout>
    );
}

export default EstablishmentDetails;
