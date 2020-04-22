import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { Document, Page, pdfjs } from "react-pdf";
import Modal from 'react-modal';
import moment from 'moment';

import { isAuthenticated, updateEstablishments } from '../../api/user';
import { CORS_URL, WEB_URL } from '../../config';
import Loading from './Loading';

import PDFImage from '../../assets/images/pdf_16x16.gif';
import PcitureImage from '../../assets/images/img_16x16.png';
import WordDocImage from '../../assets/images/word-icon.gif';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import './Establishments.css';
import titleCase, { isAnImage, isPDF, isDocument } from '../commons/CommonFunctions'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function EstablishmentsApprove({ title, establishments, onPageRefersh }) {
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [estblmt, setEstblmt] = useState([])
    const [pageNumber, setPageNumber] = useState(1)
    const [columnDefs, setColumDefs] = useState([]);
    const [rowData, setRowData] = useState([]);
    const { UserID } = isAuthenticated();

    const [gridOptions] = useState({
        suppressHorizontalScroll: true,
        suppressVertialScroll: true,
        scrollbarWidth: 0,
        paginationPageSize: 12,
        pagination: true,
        onGridReady: params => {
            params.api.sizeColumnsToFit();
        },
        rowSelection: 'multiple'
        // ,isRowSelectable: function (rowNode) {
        //     return rowNode.data ? rowNode.data.Status === 'Pending' : false;
        // },
    })

    gridOptions.getRowStyle = function (params) {
        //console.log(params)
        //debugger;
        if (params.data.Status === 'Pending') {
            return { background: '#eeeeee' };
        }
        else if (params.data.Status === 'Approved') {
            return { background: '#ccffcc', color: "#009900" };
        }
        else if (params.data.Status === 'Rejected') {
            return {
                background: '#ffe6e6',
                color: "#ff0000"
            };
        }
    };

    const showEstablishment = (data) => {

        //alert(`Title: ${data.Title}\n\nDescription: ${data.Description}`);
        //return <Redirect to="/" />
        setEstblmt({
            EstbID: data.ID,
            EstbData: data.Date,
            EstbTitle: data.Title,
            EstbDescription: data.Description,
            FileNameWithPath: data.FileName,
            EstbTypeCodeDesc: data.Type,
            AuthorOrContributorName: data.AddedBy,
            EstbStatusFlagDesc: data.Status
        });
        setIsOpen(true);

        //return <Redirect to={{ pathname: "/establishmentdetails", state: { establishment: data } }} />

    }

    useEffect(() => {
        const columns = [
            {
                headerName: "#", field: "ID", sortable: true, filter: true, width: 35, checkboxSelection: true, pinned: 'left',
                cellClass: function (params) {
                    return (params.data.Status === 'Pending' ? 'pending-records' :
                        (params.data.Status === 'Approved' ? ('approved-records') : ('rejected-records'))
                    );
                }
            },
            { headerName: "Date", field: "Date", sortable: true, filter: true, width: 80 },
            { headerName: "Type", field: "Type", sortable: true, filter: true, width: 80 },
            {
                headerName: "Title", field: "Title", sortable: false, filter: true, width: 320,
                cellRenderer: function (params) {
                    return `<a href='#'> ${params.value}</a>`

                },
                onCellClicked: function (params) {
                    showEstablishment(params.data)
                }
            },
            {
                headerName: "Description", field: "Description", sortable: false, filter: true, width: 250
            },
            {
                headerName: "View",
                field: "FileName", sortable: false, filter: false, width: 50,
                cellRenderer: function (params) {
                    var url = "";
                    if (params.value.length > 0) {
                        if (isAnImage(params.value) === true) {
                            url = `<a href='${WEB_URL}/Documents/${params.value}' target='_blank'>                                 
                                <img src='${PcitureImage}' alt='${params.value}'  />
                            </a>`;
                        }
                        else if ((isPDF(params.value) === true)) {
                            url = `<a href='${WEB_URL}/Documents/${params.value}' target='_blank'> 
                                <img src='${PDFImage}' alt='${params.value}'  />
                            </a>`;
                        }
                        else if ((isDocument(params.value) === true)) {
                            url = `<a href='${WEB_URL}/Documents/${params.value}' target='_blank'> 
                            <img src='${WordDocImage}' alt='${params.value}' />
                            </a>`;
                        }
                    }
                    return url
                }
            },
            {
                headerName: "Status", field: "Status", sortable: true, filter: true, width: 65,
                cellClass: function (params) {
                    return (params.value === 'Pending' ?
                        'pending-records-text' :
                        (params.value === 'Approved' ? ('approved-records-text') : ('rejected-records-text'))
                    );
                }
            },
            { headerName: "Added By", field: "AddedBy", sortable: true, filter: true, width: 145 }
        ];

        const rows = establishments && establishments.length > 0 && establishments.map(b => {
            return {
                ID: b.EstbID,
                //Date: new Date(b.EstbDate).toISOString().replace(/T.*/, '').split('-').reverse().join('-'),
                Date: moment(b.EstbDate).format("DD MMM YYYY"),
                Type: b.EstbTypeCodeDesc,
                Title: b.EstbTitle,
                Description: b.EstbDescription,
                FileName: b.FileNameWithPath,
                Status: b.EstbStatusFlagDesc,
                AddedBy: b.AuthorOrContributorName
            }
        });

        setColumDefs(columns);
        setRowData(rows);
    }, []);

    const getSelectedRowsAndUpdateEstablishment = (e) => {
        e.preventDefault();
        // let rowsSelection = gridOptions.api.getSelectedRows();
        let selectedIDs = gridOptions.api.getSelectedRows().map(r => r.ID);
        //console.info(selectedIDs);
        if (selectedIDs.length === 0) {
            alert("PLEAST SELECT AT LEAST ONE RECORD FOR " + e.target.name);
            return;
        }
        else {
            var msg = `DO YOU WANT TO "${e.target.name}",  SELECTED (${selectedIDs.length}) RECORD${selectedIDs.length > 0 ? 'S' : ''}?`
            //alert(msg)
            if (window.confirm(msg)) {
                //alert('okay')
            }
            else {
                //alert('not okay')
                return;
            }

        }
        setIsProcessing(true);
        updateEstablishments({ EstbIDs: selectedIDs.join(','), Operation: e.target.name, OperationByUserID: UserID })
            .then(data => {
                if (Number(data.status.code) > 0) {
                    setSuccess(data.result);
                    setError('');
                    onPageRefersh();
                }
                else {
                    setSuccess('');
                    setError(data.result);
                }
                setIsProcessing(false);
            })
            .catch(err => {
                setSuccess('');
                setError('Some error occured. ', err);
                setIsProcessing(false);
            })
    };

    const loadDocument = (type) => {
        // debugger;
        switch (type) {
            case 'img': return (
                <img
                    src={`${WEB_URL}/Documents/${estblmt.FileNameWithPath}`}
                    alt={estblmt.FileNameWithPath}
                    className="img img-responsive img-fluid w-auto"
                    style={{ maxHeight: "500px" }} />); break;
            case 'pdf':
                return (
                    <Document
                        file={{ url: `${CORS_URL}/${WEB_URL}/Documents/${estblmt.FileNameWithPath}` }}
                    //onLoadSuccess={onDocumentLoadSuccess}
                    //onLoadFailure={onDocumentLoadFailure}
                    //onLoadError={console.error}
                    >
                        <Page size="A4" pageNumber={pageNumber} style={{ border: "solid 2px red", width: "100%" }}>

                        </Page>
                    </Document>
                ); break;
            case 'doc': return (
                <a href={`${WEB_URL}/Documents/${estblmt.FileNameWithPath}`} target="_blank">
                    View Documnent
                </a>
            ); break;
            default: return "";
        }
    }

    const printDescription = (text) => (

        <div className="line-break">{text}</div>
        //<div>{text.replace('\n', '<br/>')}</div>
        // text.split("\n").map((i, key) => {
        //     return <p key={key}>{i}</p>;
        // })

    )
    const showProcessingMessage = () => {
        return isProcessing === false ? ('') : (<div className="alert alert-info m-0 p-2 text-center w-60">
            <Loading text="Processing ....." />
        </div>)
    };

    const showErrorMessage = () => {
        return error.length === 0 ? ('') : (<div className="alert alert-danger m-0 p-2 text-center w-70">{error}</div>)
    };

    const showSuccessMessage = () => {
        return success.length === 0 ? ('') : (<div className="alert alert-success m-0 p-2 text-center w-70">{success}</div>)
    };

    return (
        <div className="row m-0 p-0 ml-2">
            <div className="col-12 p-0 m-0 bg-page-title text-center">
                <b>{title}</b>
            </div>
            <div className="col-12 p-0 mt-2 text-center">
                {showProcessingMessage()}
                {showErrorMessage()}
                {showSuccessMessage()}
            </div>
            <div className="col-12 p-0 m-0 ag-theme-balham text-left" style={{ height: '420px', width: '98%', marginLeft: "5px", overflow: "hidden" }}>
                <AgGridReact
                    columnDefs={columnDefs}
                    rowData={rowData}
                    pagination={true}
                    gridOptions={gridOptions}
                >
                </AgGridReact>
            </div>
            <div className="col-12 p-0 mt-2 text-center">
                <button className="btn btn-primary m-2 btn-width-150" type="button" name="APPROVE" onClick={getSelectedRowsAndUpdateEstablishment}>
                    <i className="fas fa-check-circle mr-1"></i>APPROVE
                </button>
                {/* <button className="btn btn-primary m-2" type="button" name="PENDING" onClick={getSelectedRowsAndUpdateEstablishment}>PENDING</button> */}
                <button className="btn btn-primary m-2 btn-width-150" type="button" name="REJECT" onClick={getSelectedRowsAndUpdateEstablishment}>
                    <i className="fas fa-ban mr-1"></i> REJECT
                </button>
                <button className="btn btn-primary m-2 btn-width-150" type="button" name="DELETE" onClick={getSelectedRowsAndUpdateEstablishment}>
                    <i className="fas fa-times mr-1"></i>DELETE
                </button>
            </div>
            {/* <EstablishmentModal isOpen={isOpen} establishment={estblmt} /> */}
            <Modal isOpen={isOpen}
                shouldCloseOnOverlayClick={true}
                onRequestClose={() => setIsOpen(false)}
                style={
                    {
                        overlay: { background: "rgba(255, 203, 5, 0.8)" }
                    }}>
                <div className="row m-0 p-0 d-flex">
                    <div className="col-lg-12 col-sm-12 bg-modal-page-title text-left text-uppercase">
                        <h5>{estblmt.EstbTypeCodeDesc}</h5>
                    </div>
                    <div className="col-lg-12 col-sm-12">
                        <div className="row">
                            <div className="col-lg-6 col-sm-12 text-justify">
                                <small className="mr-4"><b>Date:</b>&nbsp; {moment(estblmt.EstbDate).format('LLLL')} ({moment(estblmt.EstbDate).fromNow()})</small>
                                <br />
                                <small className="mr-4"><b>Added By:</b>&nbsp; {estblmt.AuthorOrContributorName}</small>
                                <hr />
                                <h6>{estblmt.EstbTitle}</h6>


                                {estblmt.EstbTitle === estblmt.EstbDescription ? '' : (printDescription(estblmt.EstbDescription))}

                            </div>


                            <div className="col-lg-6 col-sm-12 text-center">

                                {isAnImage(estblmt.FileNameWithPath) ?
                                    (loadDocument('img')) :
                                    (isPDF(estblmt.FileNameWithPath) ?
                                        (loadDocument('pdf')) : (
                                            isDocument(estblmt.FileNameWithPath) ?
                                                loadDocument('doc') : ('')))}

                            </div>

                        </div>
                    </div>
                    <div className="row m-0 p-0 fixed-bottom mb-5">
                        <div className="col-12 m-0 p-0 text-center">
                            <button type="button"
                                className="btn btn-primary text-center p-1 m-1 btn-width-150"
                                onClick={() => setIsOpen(false)}>
                                <i className="fa fa-times mr-2"></i> CLOSE</button>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
}
