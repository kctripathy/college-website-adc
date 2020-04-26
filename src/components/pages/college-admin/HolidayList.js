import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { CORS_URL, WEB_URL } from "../../../config";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function HolidayList() {
  const [pageNumber] = useState(1);
  return (
    <>
      <Document
        file={{
          url: `${CORS_URL}/${WEB_URL}/Documents/ESTB_C_Y2020_M4_D9-H15_M0_S17.pdf`,
        }}
        //onLoadSuccess={onDocumentLoadSuccess}
        //onLoadFailure={onDocumentLoadFailure}
        //onLoadError={console.error}
      >
        <Page
          size="A4"
          pageNumber={pageNumber}
          style={{ width: "100%" }}
        ></Page>
      </Document>
    </>
  );
}
