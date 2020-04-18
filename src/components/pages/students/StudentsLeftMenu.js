import React from 'react';
import MenuListItem from '../../commons/MenuListItem';

const StudentsLeftMenu = ({ StudentID }) => {

    return (
        <MenuListItem destination={`/user/feedback/student/${StudentID}`} title="Submit Feedbacak" />
    )
};

export default StudentsLeftMenu;