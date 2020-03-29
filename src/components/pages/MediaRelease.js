import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Layout from './Layout';
import Loading from '../commons/Loading';
import { EstbTypeCode } from '../../constants/actionTypes';
import { fetchEstablishments } from '../../actionMethods/estbActionMethods'

export default function MediaRelease() {
    const dispatch = useDispatch();
    const estb = useSelector(state => state.estb);
    const [media, setMedia] = useState([]);

    useEffect(() => {
        if (estb.establishments.length === 0) {
            //debugger;
            dispatch(fetchEstablishments());
        }

        if (estb && estb.establishments && estb.establishments.length > 0) {
            const arr = estb.establishments.filter(e => e.EstbTypeCode === EstbTypeCode.MediaRelease);
            setMedia(arr);
        }
    }, []);

    const showPressRelease = () => {
        return <ul className="list-group">
            {
                media && media.length === 0 ? (<li className='list-group-item'>No press release</li>) :
                    (
                        <Fragment>
                            <li style={{ listStyleType: "none" }}>
                                <ul className="list-group-item" >
                                    <li className="list-inline-item col-1  m-0 p-0">Date</li>
                                    <li className="list-inline-item col-10  m-0 p-0">Description</li>
                                    <li className="list-inline-item col-1  m-0 p-0 text-right">
                                        View
                                </li>
                                </ul>
                            </li>
                            {media.map(m => {
                                return <li key={m.EstbID} className="list-group-item  m-0 p-1 pl-2">
                                    <ul className="list-inline col-12 m-0 p-0">
                                        <li className="list-inline-item col-1  m-0 p-0">{new Date(m.EstbDate).toShortFormat()}</li>
                                        <li className="list-inline-item col-10  m-0 p-0">{m.EstbTitle}</li>
                                        <li className="list-inline-item col-1  m-0 p-0 text-right">

                                            <Link to={{
                                                pathname: '/establishmentdetails',
                                                state: {
                                                    establishment: m
                                                }
                                            }}><i class="fas fa-file-pdf fa-2x text-danger"></i></Link>
                                        </li>
                                    </ul>
                                </li>
                            })
                            }
                        </Fragment>
                    )
            }

        </ul>
    };

    return (
        <Layout title="Media / Press Release">
            <div className="row">
                <div className="col-lg-2 col-sm-12">&nbsp;</div>
                <div className="col-lg-8 col-sm-12">
                    {estb.loading ? (<Loading text="Retriving media releases..." />) : ('')}
                    {showPressRelease()}
                </div>
                <div className="col-lg-2 col-sm-12">&nbsp;</div>
            </div>
        </Layout>
    );
}
