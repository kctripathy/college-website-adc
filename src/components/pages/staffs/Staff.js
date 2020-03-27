import React from 'react';
import './Staff.css';
import StaffPhoto from '../../../assets/images/logo-50.png'

export default function Staff(props) {
    //console.log(props);
    //debugger;
    const { Salutation, EmployeeName, DesignationDescription, DepartmentDescription, Mobile, EmailID, TeachingOrNonTeaching } = props.staff;
    return (

        <div className="col-lg-2 col-md-4 col-sm-6 col-xs-12 staff-card mb-4">
            <div className="card border-secondary rounded-0 mb-4 text-center">
                <div className="card-header p-0 text-center">
                    <div className="bg-muted text-dark p-0 text-center">
                        <div className="row m-0 p-1 text-center">
                            {/* <img src={StaffPhoto} className="text-center staff-photo" /> */}
                        </div>
                    </div>
                </div>
                <div className="card-body p-2">
                    <h6 className="staff-name">{Salutation} {EmployeeName}</h6>
                    <h6 className="staff-designation">{DesignationDescription}</h6>
                    <h6 className="staff-department">{DepartmentDescription}</h6>
                    <h6 className="staff-phone">{Mobile && Mobile.length > 0 ? ("Ph.: " + Mobile) : ("")}</h6>
                    <h6 className="staff-email">&nbsp;{EmailID && EmailID.length > 0 ? ("Email: " + EmailID) : ("")}</h6>
                </div>
            </div>
        </div>
    );
}
