import React from 'react';
import MenuListItem from '../commons/MenuListItem';
import { isAuthenticated } from '../../api/user';

const AdminLeftMenu = (props) => {
    const { UserReferenceID } = isAuthenticated();

    return (
        <>
            <MenuListItem destination="/administration/dashboard" title="Dashboard" showBadge={false} />
            <MenuListItem destination="/administration/establishments/manage" title="Manage All Establishments" showBadge={false} />
            <MenuListItem destination="/administration/establishment/notice" title="Notice" addview={true} />
            <MenuListItem destination="/administration/establishment/tender" title="Tender" addview={true} />
            <MenuListItem destination="/administration/establishment/circular" title="Circular" addview={true} />

            <MenuListItem destination={`/user/add-activity/staff/${UserReferenceID}`} title="Activity" addview={true} />
            <MenuListItem destination={`/user/add-publication/staff/${UserReferenceID}`} title="Publication" addview={true} />

            <MenuListItem destination="/administration/establishment/photo" title="Photo" addview={true} />
            <MenuListItem destination="/administration/establishment/video" title="Video" addview={true} />
            <MenuListItem destination="/administration/establishment/media" title="Media" addview={true} />

            <MenuListItem destination="/administration/establishment/syllabus" title="Syllabus" addview={true} />
            <MenuListItem destination="/administration/establishment/download" title="Download" addview={true} />
            <MenuListItem destination="/administration/establishment/meeting" title="Meeting" addview={true} />

        </>
    )
};

export default AdminLeftMenu;
