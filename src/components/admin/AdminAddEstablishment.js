import React, { useState, useEffect } from 'react';
import { isAuthenticated } from '../../api/user';
import LayoutDashboardAdmin from '../pages/LayoutDashboardAdmin';
import Loading from '../commons/Loading'
import EstablishmentsAdd from '../commons/EstablishmentsAdd';
import { EstbTypeCode } from '../../constants/actionTypes';

export default function AdminAddEstablishment({ match }) {
    const [code, setCode] = useState('N');

    useEffect(() => {
        if (match.params.page === undefined) return;
        switch (match.params.page) {
            case 'notice': setCode(EstbTypeCode.Notice); break;
            case 'tender': setCode(EstbTypeCode.Tender); break;
            case 'circular': setCode(EstbTypeCode.Circular); break;
            case 'photo': setCode(EstbTypeCode.IMAGE); break;
            case 'video': setCode(EstbTypeCode.VIDEO); break;
            case 'media': setCode(EstbTypeCode.MEDIA); break;
            case 'syllabus': setCode(EstbTypeCode.Syllabus); break;
            case 'meeting': setCode(EstbTypeCode.MinutesOfMeeting); break;
            case 'download': setCode(EstbTypeCode.Downloadable); break;

        }
    }, [match.params.page])

    // const getEstbTypeCode = () => {
    //     debugger;
    //     if (match.params.page === undefined) return 'N';

    //     switch (match.params.page) {
    //         case 'notice': return (EstbTypeCode.Notice); break;
    //         case 'tender': return (EstbTypeCode.Tender); break;
    //         case 'circular': return (EstbTypeCode.Circular); break;
    //     }
    // }

    return (
        <LayoutDashboardAdmin title="Add Activity">
            <EstablishmentsAdd title={`Add New ${match.params.page}`} code={code} description={match.params.page} />
        </LayoutDashboardAdmin>
    );
}