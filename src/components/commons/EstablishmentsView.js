import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import moment from 'moment';
import { isAuthenticated, updateEstablishments } from '../../api/user';
import { CORS_URL, WEB_URL } from '../../config';

import PDFImage from '../../assets/images/pdf_16x16.gif';
import PcitureImage from '../../assets/images/img_16x16.png';
import WordDocImage from '../../assets/images/word-icon.gif';

//import EstablishmentModal from './EstablishmentModal';

import { isAnImage, isPDF, isDocument } from './CommonFunctions';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';


export default function EstablishmentsView({ title, code, establishments, onPageRefersh }) {

    //const [isOpen, setIsOpen] = useState(false);
    //const [estblmt, setEstblmt] = useState([])
    const [columnDefs, setColumDefs] = useState([]);
    const [rowData, setRowData] = useState([]);
    const [run, setRun] = useState(null);

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
        rowSelection: 'multiple',
        isRowSelectable: function (rowNode) {
            return rowNode.data ? rowNode.data.Status === 'Pending' : false;
        },
    })


    useEffect(() => {
        setRun(true);
        const columns = [
            { headerName: "#", field: "ID", sortable: true, filter: true, width: 40, checkboxSelection: true, pinned: 'left' },
            { headerName: "Date", field: "Date", sortable: true, filter: true, width: 80 },
            { headerName: "Type", field: "Type", sortable: true, filter: true, width: 100 },
            {
                headerName: "Title", field: "Title", sortable: false, filter: true, width: 300,
                cellRenderer: function (params) {
                    return `<a href='#'> ${params.value}</a>`

                },
                onCellClicked: function (params) {

                    showEstablishment(params.data)
                }
            },
            { headerName: "Description", field: "Description", sortable: false, filter: true, width: 300 },
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
            { headerName: "Status", field: "Status", sortable: true, filter: true, width: 80 }
        ];

        const rows = establishments.filter(e => e.AddedBy === UserID).map(b => {
            return {
                ID: b.EstbID,
                Date: moment(b.EstbDate).format("DD MMM YYYY"), //new Date(b.EstbDate).toISOString().replace(/T.*/, '').split('-').reverse().join('-'),
                Type: b.EstbTypeCodeDesc,
                Title: b.EstbTitle,
                Description: b.EstbDescription,
                FileName: b.FileNameWithPath,
                Status: b.EstbStatusFlagDesc
            }
        });

        setColumDefs(columns);
        setRowData(rows);
    }, []);

    const getSelectedRows = (e) => {
        e.preventDefault();
        //console.log(e.target.name);
        let rowsSelection = gridOptions.api.getSelectedRows();
        //console.info(rowsSelection);
    }

    const getSelectedRowsAndUpdateEstablishment = (e) => {
        e.preventDefault();
        let selectedIDs = gridOptions.api.getSelectedRows().map(r => r.ID);
        if (selectedIDs.length === 0) {
            alert("PLEAST SELECT AT LEAST ONE RECORD FOR " + e.target.name);
        }
        else {
            var msg = `DO YOU WANT TO "${e.target.name}",  SELECTED (${selectedIDs.length}) RECORD${selectedIDs.length > 0 ? 'S' : ''}?`
            if (!(window.confirm(msg))) {
                return;
            }
        }

        updateEstablishments({ EstbIDs: selectedIDs.join(','), Operation: e.target.name, OperationByUserID: UserID })
            .then(data => {
                if (Number(data.status.code) > 0) {
                    alert("SELECTED RECORDS DELETED SUCCESSFULLY... ");
                    //setRun(!run);
                    onPageRefersh()
                }
                else {
                    alert("FAILED TO DELETE SELECTED RECORDS...")
                    //setSuccess('');
                    //setError(data.result);
                }
                //setIsProcessing(false);
            })
            .catch(err => {
                //setError('Some error occured. ', err);
                console.log('err')
            })
    };

    gridOptions.getRowStyle = function (params) {
        //console.log(params)
        //debugger;
        if (params.data.Status === 'Pending') {
            return { background: '#ffffff' };
        }
        else if (params.data.Status === 'Approved') {
            return { background: '#ccffcc' };
        }
        else if (params.data.Status === 'Rejected') {
            return { background: '#ffcccc' };
        }
    };

    const showEstablishment = (data) => {
        alert(`Title: ${data.Title}\n\nDescription: ${data.Description}`);

        // setEstblmt({
        //     EstbID: data.ID,
        //     EstbData: data.Date,
        //     EstbTitle: data.Title,
        //     EstbDescription: data.Description,
        //     FileNameWithPath: data.FileName,
        //     EstbTypeCodeDesc: data.Type,
        //     AuthorOrContributorName: data.AddedBy,
        //     EstbStatusFlagDesc: data.Status
        // });
        // setIsOpen(true);
    }
    return (
        <div className="row d-flex text-left pl-4">

            <div className="col-12 p-0 m-0 mb-4 bg-page-title" style={{ textTransform: "uppercase" }}>
                <b>{title}</b>
            </div>
            <div className="ag-theme-balham" style={{ height: '420px', width: '98%', marginLeft: "5px", overflow: "hidden" }}>
                <AgGridReact
                    columnDefs={columnDefs}
                    rowData={rowData}
                    pagination={true}
                    gridOptions={gridOptions}
                >
                </AgGridReact>
            </div>
            <div className="col-12 p-0 mt-2 text-center">
                <button className="btn btn-primary m-2 btn-width-150" type="button" name="DELETE"
                    onClick={getSelectedRowsAndUpdateEstablishment}>
                    <i className="fas fa-times mr-1"></i>DELETE
                </button>
            </div>
            {/* <EstablishmentModal isOpen={isOpen} establishment={estblmt} /> */}
        </div>
    );
}
