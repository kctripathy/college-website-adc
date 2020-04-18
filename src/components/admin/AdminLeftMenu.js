import React from 'react';
import { Link } from 'react-router-dom';
import MenuListItem from '../commons/MenuListItem';

const AdminLeftMenu = (props) => {
    return (
        <>
            <MenuListItem destination="/administration/establishments/manage" title="Approve/Reject/Delete Establishments" showBadge={false} />
            <MenuListItem destination="/administration/establishment/notice" title="Add New Notice" />
            <MenuListItem destination="/administration/establishment/tender" title="Add New Tender" />
            <MenuListItem destination="/administration/establishment/circular" title="Add New Circular" />

            <MenuListItem destination={`/user/add-publication/staff/${props.EmployeeID}`} title="Add New Publication" />
            <MenuListItem destination={`/user/add-activity/staff/${props.EmployeeID}`} title="Add New Recent Activity" />

            <MenuListItem destination="/administration/establishment/photo" title="Add Photo to Gallery" />
            <MenuListItem destination="/administration/establishment/video" title="Add Video to Gallery" />
            <MenuListItem destination="/administration/establishment/media" title="Add Media to Gallery" />

            {/* <MenuListItem destination="/administration/establishment/publications" title="Add New Publications" /> */}

        </>
    )
};

export default AdminLeftMenu;
