import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { isAuthenticated } from '../../api/user';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

//import 'ag-grid/dist/styles/ag-theme-material.css';
//import { AgGridCheckboxComponent } from 'ag-grid-checkbox/ag-grid-checkbox.component';


export default function EstablishmentsView_Original({ title, code, establishments }) {

    const [columnDefs, setColumDefs] = useState([]);
    const [rowData, setRowData] = useState([]);
    const { UserID } = isAuthenticated();

    const [gridOptions] = useState({
        suppressHorizontalScroll: true,
        scrollbarWidth: 0,
        onGridReady: params => {
            params.api.sizeColumnsToFit();
        }
    })


    useEffect(() => {
        const columns = [
            //{ headerName: 'Check Box', cellRendererFramework: AgGridCheckboxComponent, field: 'ID' },
            // {
            //     headerName: 'ID', field: 'ID', width: 50, editable: true, cellRenderer: params => {
            //         return `<input type='checkbox' ${params.value ? 'checked' : ''} />`;
            //     }
            // },
            { headerName: "Date", field: "Date", sortable: true, filter: true, width: 80 },
            { headerName: "Type", field: "Type", sortable: true, filter: true, width: 100 },
            { headerName: "Title", field: "Title", sortable: true, filter: true, width: 200 },
            { headerName: "Description", field: "Description", sortable: true, filter: true, width: 300 },
            { headerName: "FileName", field: "FileName", sortable: true, filter: true, width: 150 },
            { headerName: "Status", field: "Status", sortable: true, filter: true, width: 80 }
        ];

        const rows = establishments.filter(e => e.AddedBy === UserID).map(b => {
            return {
                //ID: b.EstbID,
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

    return (
        <div className="row d-flex text-left pl-4">

            <div className="col-12 p-0 m-0 mb-4 bg-page-title" style={{ textTransform: "uppercase" }}>
                <b>{title}</b>
            </div>
            <div className="ag-theme-balham" style={{ height: '600px', width: '100%', overflow: "hidden" }}>
                <AgGridReact
                    columnDefs={columnDefs}
                    rowData={rowData}
                    pagination={true}
                    gridOptions={gridOptions}
                >
                </AgGridReact>
            </div>
        </div>
    );
}
