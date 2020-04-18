import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { isAuthenticated, updateEstablishments } from '../../api/user';
import { CORS_URL, WEB_URL } from '../../config';
import Loading from './Loading';

import PDFImage from '../../assets/images/pdf_16x16.gif';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import './Establishments.css';

export default function EstablishmentsApprove({ title, establishments, onPageRefersh, run }) {
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);
    const [refresh, setRefresh] = useState(run);
    const [columnDefs, setColumDefs] = useState([]);
    const [rowData, setRowData] = useState([]);
    const { UserID } = isAuthenticated();

    const [gridOptions] = useState({
        suppressHorizontalScroll: true,
        suppressVertialScroll: true,
        scrollbarWidth: 0,
        paginationPageSize: 15,
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
        var msg = `Date:${data.Date}\n\nTitle: ${data.Title}\n\nDescription: ${data.Description}\n\nUploaded File: ${data.FileName}\n\nAdded By: ${data.AddedBy}\n\nStatus: ${data.Status}\n\n`;
        alert(msg);
        //var x = document.getElementById("estbInfo");
        //x.innerText = msg;
    }

    useEffect(() => {
        const columns = [
            {
                headerName: "#", field: "ID", sortable: true, filter: true, width: 35, checkboxSelection: true,
                cellClass: function (params) {
                    //console.log(params)
                    return (params.data.Status === 'Pending' ?
                        'pending-records' :
                        (params.data.Status === 'Approved' ? ('approved-records') : ('rejected-records'))
                    );
                }
            },
            { headerName: "Date", field: "Date", sortable: true, filter: true, width: 80 },
            { headerName: "Type", field: "Type", sortable: true, filter: true, width: 80 },
            {
                headerName: "Title", field: "Title", sortable: false, filter: true, width: 220,
                cellRenderer: function (params) {
                    return `<a href='javascript:showEstablishment(${params.data.ID})'> ${params.value}</a>`

                },
                onCellClicked: function (params) {

                    showEstablishment(params.data)
                }
            },
            {
                headerName: "Description", field: "Description", sortable: false, filter: true, width: 400
            },
            {
                headerName: "V",
                field: "FileName", sortable: false, filter: false, width: 30,
                cellRenderer: function (params) {
                    //let url = `<a href='${CORS_URL}/${WEB_URL}/Documents/${params.value}' target='_blank'>View File</a>`
                    var url;
                    if (params.value.length > 0)
                        url = `<a href='${WEB_URL}/Documents/${params.value}' target='_blank'> 
                                    <img src='${PDFImage}' alt='${params.value}' />
                                </a>`;
                    else
                        url = "";

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

        const rows = establishments.map(b => {
            return {
                ID: b.EstbID,
                Date: new Date(b.EstbDate).toISOString().replace(/T.*/, '').split('-').reverse().join('-'),
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
        console.info(selectedIDs);
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
        <div className="row d-flex text-left pl-4">
            <div className="col-11 p-0 m-0 mb-4 ml-5 bg-page-title">
                <b>{title}</b>
            </div>
            <div className="col-12 p-0 mt-2 text-center">
                {showProcessingMessage()}
                {showErrorMessage()}
                {showSuccessMessage()}
            </div>
            <div className="ag-theme-balham" style={{ height: '500px', width: '100%', overflow: "hidden" }}>
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

            {/* <div className="alert alert-info alert-dismissable" id="estbInfo">
                <button type="button" className="close" data-dismiss="alert">×</button>
                Message
            </div> */}
        </div>
    );
}
