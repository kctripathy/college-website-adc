import React, { useState } from 'react';
import { isAuthenticated } from '../../../api/user';
import DashboardLayout from '../LayoutDashboard';
import Loading from '../../commons/Loading'
import EstablishmentsAdd from '../../commons/EstablishmentsAdd';

export default function UserAddActivity() {

    return (
        <DashboardLayout title="Add Activity">
            <EstablishmentsAdd title="Add New Recent Activity" code="R" description="Recent Activity" />
        </DashboardLayout>
    );
}
