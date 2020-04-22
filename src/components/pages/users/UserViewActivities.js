import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchEstablishments, fetchEstablishmentStarted } from '../../../actionMethods/estbActionMethods';
import Loading from '../../commons/Loading';

import DashboardLayout from '../LayoutDashboard';
import EstablishmentsView from '../../commons/EstablishmentsView';

export default function UserViewActivities() {
    const state = useSelector(state => state.estb);
    const dispatch = useDispatch();
    //const [establishments, setestablishments] = React.useState([]);

    React.useEffect(() => {
        dispatch(fetchEstablishments())
    }, [])


    const onPageRefersh = () => {
        dispatch(fetchEstablishmentStarted())
        dispatch(fetchEstablishments())
    };

    const show = () => {
        //debugger;
        if (state.loading)
            return <Loading text="Fetching..." />
        else {
            const myActivities = state.establishments.filter(e => e.EstbTypeCode.substring(0, 1) === 'R')
            return <DashboardLayout title="View Activity">
                <EstablishmentsView
                    title="View Recent Activities"
                    code="R"
                    description="Recent Activity"
                    onPageRefersh={onPageRefersh}
                    establishments={myActivities} />
            </DashboardLayout>
        }
    }
    return (
        <>
            {show()}
        </>
    );
}
