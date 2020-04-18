import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchEstablishments, fetchEstablishmentStarted } from '../../actionMethods/estbActionMethods';
import Loading from '../commons/Loading';

import DashboardLayoutAdmin from '../pages/LayoutDashboardAdmin';
import EstablishmentsApprove from '../commons/EstablishmentsApprove';

export default function AdminManageEstablishments() {
    const state = useSelector(state => state.estb);
    const dispatch = useDispatch();
    //const [willRefresh, setWillRefresh] = useState(false);
    //const [establishments, setestablishments] = React.useState([]);

    React.useEffect(() => {
        dispatch(fetchEstablishmentStarted())
        dispatch(fetchEstablishments());
        //setWillRefresh(false)
    }, [])

    const onPageRefersh = () => {
        //debugger;
        //console.log('onPageRefersh......')
        dispatch(fetchEstablishmentStarted())
        dispatch(fetchEstablishments())
        //setWillRefresh(true);
        //debugger;
    };

    return (
        <DashboardLayoutAdmin title="View Activity">
            <div className="row m-0 p-0">
                <div className="col-12 m-0 p-0 w-100">
                    {state.loading ? (<Loading text="Fetching establishments..." />) :
                        (<EstablishmentsApprove
                            title="View/Approve/Reject/Delete Establishments"
                            description="Establishments"
                            onPageRefersh={onPageRefersh}
                            //run={willRefresh}
                            establishments={state.establishments} />)
                    }
                </div>
            </div>
        </DashboardLayoutAdmin>

    );
}
