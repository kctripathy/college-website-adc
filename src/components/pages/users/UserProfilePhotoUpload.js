import React, { useState } from 'react';
import LayoutDashboard from '../LayoutDashboard';
import UploadFile from '../../commons/UploadFile';
// import UploadImage from '../../commons/UploadImage';

export default function UserProfilePhotoUpload(props) {
    const [toggle, setToggle] = useState(true);

    //This function has been created to refresh the layout page after uploading the photo
    const setRun = () => {
        setToggle(!toggle);
    }


    return (
        <LayoutDashboard title="Upload Profile Photo" refreshStatus={toggle}>
            <UploadFile title="Upload Profile Photo" onRun={setRun} />
            {/* <UploadImage /> */}
        </LayoutDashboard>
    );
}
