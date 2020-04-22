import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../Layout';
import Loading from '../../commons/Loading';
import { EstbTypeCode } from '../../../constants/actionTypes';
import { fetchEstablishments } from '../../../actionMethods/estbActionMethods'
import { WEB_URL } from '../../../config';

export default function MediaGallery() {
    const dispatch = useDispatch();
    const estb = useSelector(state => state.estb);
    const [media, setMedia] = useState([]);

    useEffect(() => {
        if (estb.establishments.length === 0) {
            //debugger;
            dispatch(fetchEstablishments());
        }

        if (estb && estb.establishments && estb.establishments.length > 0) {
            const arr = estb.establishments.filter(e => e.EstbTypeCode === EstbTypeCode.MEDIA);
            setMedia(arr);
        }
    }, [estb]);

    const showPressRelease = () => {
        return <>
            {
                media && media.length === 0 ? (<li className='list-group-item'>No press release</li>) :
                    (
                        <Fragment>

                            {media.map(m => {
                                return <div className="card m-1" style={{ width: "18rem" }}>
                                    <img className="card-img-top" src={`${WEB_URL}/Documents/${m.FileNameWithPath}`} alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">{m.EstbTitle}</h5>
                                        <p className="card-text">{m.EstbTitle}</p>
                                        <a href={`${WEB_URL}/Documents/${m.FileNameWithPath}`} className="w-100 text-center float-right">View</a>
                                    </div>
                                </div>

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
                            })
                            }
                        </Fragment>
                    )
            }

        </>
    };

    return (
        <Layout title="Media / Press Release">
            <div className="row">
                <div className="col-lg-2 col-sm-12">&nbsp;</div>
                <div className="col-lg-8 col-sm-12 d-flex">
                    {estb.loading ? (<Loading text="Retriving media releases..." />) : ('')}
                    {showPressRelease()}
                </div>
                <div className="col-lg-2 col-sm-12">&nbsp;</div>
            </div>
        </Layout>
    );
}
