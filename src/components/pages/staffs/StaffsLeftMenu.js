import React from 'react';
import MenuListItem from '../../commons/MenuListItem';
const StaffsLeftMenu = ({ EmployeeID }) => {

    return (
        <>
            <MenuListItem destination={`/user/add-activity/staff/${EmployeeID}`} title="Add New Recent Activity" />
            <MenuListItem destination={`/user/view-activities/staff/${EmployeeID}`} title="View Recent Activities" />

            <MenuListItem destination={`/user/add-publication/staff/${EmployeeID}`} title="Add New Publication" />
            <MenuListItem destination={`/user/view-publications/staff/${EmployeeID}`} title="View Publications" />
            <MenuListItem destination={`/user/feedback/staff/${EmployeeID}`} title="Submit Feedback" />
        </>
    )
};

export default StaffsLeftMenu;