import React from 'react';
import EstablishmentsAdd from '../../commons/EstablishmentsAdd'
import LayoutDashboard from '../LayoutDashboard';

export default function UserAddPublication(props) {
    return (
        <LayoutDashboard>
            <EstablishmentsAdd title="Add New Publication" code="P" description="Publication" />
        </LayoutDashboard>
    );
}
