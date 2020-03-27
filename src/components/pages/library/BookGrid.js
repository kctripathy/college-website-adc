import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
// import 'ag-grid-community/dist/styles/theme-material.css';

const BookGrid = (props) => {
    const [columnDefs, setColumDefs] = useState([]);
    const [rowData, setRowData] = useState([]);
    const [gridOptions] = useState({
        suppressHorizontalScroll: true,
        scrollbarWidth: 0
    })

    useEffect(() => {
        const columns = [
            { headerName: "Accn. #", field: "AccessionNo", sortable: true, filter: true, width: 80, pinned: 'left' },
            { headerName: "Title", field: "Title", sortable: true, filter: true, width: 350 },
            { headerName: "Author", field: "AuthorName", sortable: true, filter: true },
            { headerName: "Publisher", field: "PublisherName", sortable: true, filter: true },
            { headerName: "Type", field: "BookType", sortable: true, filter: true, width: 80 },
            { headerName: "Category", field: "CategoryName", sortable: true, filter: true },
            { headerName: "Segment", field: "SegmentName", sortable: true, filter: true, width: 180 },
            { headerName: "Issued?", field: "IsBookIssued", sortable: true, filter: true, width: 100 },
            { headerName: "Price", field: "BookPrice" }
        ];

        const rows = props.books.map(b => {
            return {
                AccessionNo: b.AccessionNo,
                Title: b.Title,
                AuthorName: b.AuthorName,
                PublisherName: b.PublisherName,
                BookType: b.BookType,
                CategoryName: b.CategoryName,
                SegmentName: b.SegmentName,
                IsBookIssued: b.IsBookIssued,
                BookPrice: b.BookPrice
            }
        });

        setColumDefs(columns);
        setRowData(rows);
    }, []);

    //console.log("columns = ", columnDefs);
    //console.log("rows = ", rowData);

    return (
        <div className="ag-theme-balham" style={{ height: '500px', width: '100%', overflow: "hidden" }}>
            <AgGridReact
                columnDefs={columnDefs}
                rowData={rowData}
                pagination={true}
                gridOptions={gridOptions}
            >
            </AgGridReact>
        </div>
    );
};

export default BookGrid;