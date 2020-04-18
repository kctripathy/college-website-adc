import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { isAuthenticated } from '../../api/user';
import { CORS_URL, WEB_URL } from '../../config';
import PDFImage from '../../assets/images/pdf_16x16.gif';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';


export default function EstablishmentsView({ title, code, establishments }) {

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
        rowSelection: 'multiple',
        isRowSelectable: function (rowNode) {
            return rowNode.data ? rowNode.data.Status === 'Pending' : false;
        },
    })


    useEffect(() => {
        const columns = [
            { headerName: "#", field: "ID", sortable: true, filter: true, width: 40, checkboxSelection: true },
            { headerName: "Date", field: "Date", sortable: true, filter: true, width: 80 },
            { headerName: "Type", field: "Type", sortable: true, filter: true, width: 100 },
            { headerName: "Title", field: "Title", sortable: false, filter: true, width: 200 },
            { headerName: "Description", field: "Description", sortable: false, filter: true, width: 400 },
            {
                headerName: "View",
                field: "FileName", sortable: false, filter: false, width: 100,
                cellRenderer: function (params) {
                    //let url = `<a href='${CORS_URL}/${WEB_URL}/Documents/${params.value}' target='_blank'>View File</a>`
                    var url;
                    if (params.value.length > 0)
                        url = `<a href='${WEB_URL}/Documents/${params.value}' target='_blank'> 
                            <img src='${PDFImage}' alt='${params.value}' /> View File
                            </a>`;
                    else
                        url = "";

                    return url
                }
            },
            { headerName: "Status", field: "Status", sortable: true, filter: true, width: 80 }
        ];

        const rows = establishments.filter(e => e.AddedBy === UserID).map(b => {
            return {
                ID: b.EstbID,
                Date: new Date(b.EstbDate).toISOString().replace(/T.*/, '').split('-').reverse().join('-'),
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

    gridOptions.getRowStyle = function (params) {
        //console.log(params)
        //debugger;
        if (params.data.Status === 'Pending') {
            return { background: '#b3d9ff' };
        }
        else if (params.data.Status === 'Approved') {
            return { background: '#ccffcc' };
        }
        else if (params.data.Status === 'Rejected') {
            return { background: '#ffcccc' };
        }
    }
    return (
        <div className="row d-flex text-left pl-4">

            <div className="col-12 p-0 m-0 mb-4 bg-page-title" style={{ textTransform: "uppercase" }}>
                <b>{title}</b>
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
                {/* <button className="btn btn-primary m-2" type="button" name="DELETE" onClick={getSelectedRows}>DELETE SELECTED ITEMS</button> */}
            </div>

        </div>
    );
}
