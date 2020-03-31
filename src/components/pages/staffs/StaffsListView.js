import React from 'react';
import Staff from './Staff';

export default function StaffsListView(props) {

    return (
        <>
            {
                props.staffs && props.staffs.length > 0 &&
                props.staffs.map(s => <Staff key={s.EmployeeID} staff={s} />)
            }
        </>
    );
}
