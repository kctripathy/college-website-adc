import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchEstablishments } from '../../../actionMethods/estbActionMethods';
import Loading from '../../commons/Loading';

import DashboardLayout from '../LayoutDashboard';
import EstablishmentsView from '../../commons/EstablishmentsView';

export default function UserViewPublications() {
    const state = useSelector(state => state.estb);
    const dispatch = useDispatch();
    //const [establishments, setestablishments] = React.useState([]);

    React.useEffect(() => {
        dispatch(fetchEstablishments())
    }, [state.loading])

    const show = () => {
        //debugger;
        if (state.loading === true)
            return <Loading text="Fetching..." />
        else {
            const publicationArray = state.establishments.filter(e => e.EstbTypeCode.substring(0, 1) === 'P')
            return <DashboardLayout title="View Activity">
                <EstablishmentsView
                    title="View Publications"
                    code="P"
                    description="Publications"
                    establishments={publicationArray} />
            </DashboardLayout>
        }
    }
    return (
        <>
            {show()}
        </>
    );
}
