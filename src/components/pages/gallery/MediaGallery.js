import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../Layout";
import Loading from "../../commons/Loading";
import { EstbTypeCode } from "../../../constants/actionTypes";
import { fetchEstablishments } from "../../../actionMethods/estbActionMethods";
import { WEB_URL } from "../../../config";

export default function MediaGallery() {
  const dispatch = useDispatch();
  const estb = useSelector((state) => state.estb);
  const [media, setMedia] = useState([]);

  useEffect(() => {
    if (estb.establishments.length === 0) {
      //debugger;
      dispatch(fetchEstablishments());
    }

    if (estb && estb.establishments && estb.establishments.length > 0) {
      const arr = estb.establishments.filter(
        (e) => e.EstbTypeCode === EstbTypeCode.MEDIA
      );
      setMedia(arr);
    }
  }, [estb]);

  const showPressRelease = () => {
    return (
      <>
        {media && media.length === 0 ? (
          <li className="list-group-item">No press release</li>
        ) : (
          <Fragment>
            {media.map((m) => {
              return (
                <div
                  key={m.EstbID}
                  className="col-lg-3 col-sm-12 col-xs-12 m-0 p-0"
                >
                  <div className="card m-1" style={{ width: "18rem" }}>
                    <div className="card-body">
                      {/* <p className="card-text">{m.EstbDescription}</p> */}
                      <a
                        href={`${WEB_URL}/Documents/${m.FileNameWithPath}`}
                        className="w-100 text-center float-right"
                        target="_blank"
                      >
                        <img
                          className="card-img-top img img-responsive"
                          src={`${WEB_URL}/Documents/${m.FileNameWithPath}`}
                          alt={m.EstbTitle}
                        />
                      </a>
                    </div>
                    <div className="card-footer m-0 p-2 text-truncate">
                      <b>{m.EstbTitle}</b>
                    </div>
                  </div>
                </div>
              );
              // <li key={m.EstbID} className="list-group-item  m-0 p-1 pl-2">
              //     <ul className="list-inline col-12 m-0 p-0">
              //         <li className="list-inline-item col-1  m-0 p-0">{new Date(m.EstbDate).toShortFormat()}</li>
              //         <li className="list-inline-item col-10  m-0 p-0">{m.EstbTitle}</li>
              //         <li className="list-inline-item col-1  m-0 p-0 text-right d-block">

              //             <Link to={{
              //                 pathname: '/establishmentdetails',
              //                 state: {
              //                     establishment: m
              //                 }
              //             }}>

              //                 <img classNamae="img img-responsive img-thumbnail d-block"
              //                     style={{ height: "300px" }} alt={m.EstbTitle}
              //                     src={`${WEB_URL}/Documents/${m.FileNameWithPath}`} />

              //             </Link>
              //         </li>
              //     </ul>
              // </li>
            })}
          </Fragment>
        )}
      </>
    );
  };

  return (
    <Layout title="Media / Press Release">
      <div className="row m-0 p-0 text-center">
        {estb.loading ? <Loading text="Retriving media releases..." /> : ""}
        {showPressRelease()}
      </div>
    </Layout>
  );
}
