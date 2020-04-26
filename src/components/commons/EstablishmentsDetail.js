// import React, { useState, useEffect } from "react";
// import moment from "moment";
// import { Document, Page, pdfjs } from "react-pdf";
// import { CORS_URL, WEB_URL } from "../../config";
// import Iframe from "react-iframe";

// const EstablishmentsDetail = ({ establishment }) => {
//   const showEstablishment = () => {
//     return (
//       establishment && (
//         <div className="col-12 text-center">
//           <h5 className="bg-modal-page-title w-100 text-left text-uppercase">
//             {establishment.EstbTypeCodeDesc}
//           </h5>
//           <div className="row">
//             <div className="col-lg-6 col-sm-12 text-justify">
//               <small className="mr-4">
//                 <b>
//                   {titleCase(establishment.EstbTypeCodeDesc)}
//                   Date:
//                 </b>
//                 &nbsp; {moment(establishment.EstbDate).format("LLLL")} (
//                 {moment(establishment.EstbDate).fromNow()})
//               </small>
//               <br />
//               <small className="mr-4">
//                 <b>Added By:</b>&nbsp; {establishment.AuthorOrContributorName}
//               </small>
//               <hr />
//               <h6>{establishment.EstbTitle}</h6>

//               {establishment.EstbTitle === establishment.EstbDescription
//                 ? ""
//                 : establishment.EstbDescription}
//             </div>

//             <div className="col-lg-6 col-sm-12 text-center">
//               <Iframe
//                 url={`${WEB_URL}\Documents\{establishment.FileNameWithPath}`}
//                 width="100%"
//                 height="100%"
//                 id="myId"
//                 className="myClassname"
//                 display="initial"
//                 position="relative"
//               />
//               {/* {isAnImage(establishment.FileNameWithPath)
//                 ? loadDocument("img")
//                 : isPDF(establishment.FileNameWithPath)
//                 ? loadDocument("pdf")
//                 : isDocument(establishment.FileNameWithPath)
//                 ? loadDocument("doc")
//                 : ""} */}
//             </div>
//           </div>
//         </div>
//       )
//     );
//   };
//   return (
//     //<LayoutModalPopup title="Establishments">
//     <div className="row">{showEstablishment()}</div>
//     //</LayoutModalPopup>
//   );
// };

// export default EstablishmentsDetail;
