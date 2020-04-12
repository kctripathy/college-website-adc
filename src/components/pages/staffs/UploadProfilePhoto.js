import React, { useState } from 'react';
import LayoutDashboard from '../LayoutDashboard';
import Fileuplod from '../../commons/Fileupload';

export default function UploadProfilePhoto(props) {
    const [toggle, setToggle] = useState(true);

    //This function has been created to refresh the layout page after uploading the photo
    const setRun = () => {
        setToggle(!toggle);
    }


    return (
        <LayoutDashboard title="Upload Profile Photo" refreshStatus={toggle}>
            <Fileuplod title="Upload Profile Photo" onRun={setRun} />
        </LayoutDashboard>
    );
}
