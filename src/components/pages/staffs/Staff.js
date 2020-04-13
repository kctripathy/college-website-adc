import React, { Fragment } from 'react';
import './Staff.css';
import { API_URL } from '../../../config';

export default function Staff(props) {
    //console.log(props);
    //debugger;
    const { EmployeeID, EmployeeCode, Salutation, EmployeeName, DesignationDescription, DepartmentDescription, Mobile, EmailID, TeachingOrNonTeaching } = props.staff;
    return (

        <div className="col-lg-3 col-sm-12 d-flex">
            <div className="card border-text-muted rounded-0 mb-4 text-center">
                <div className="card-header p-0 text-center">
                    <div className="bg-muted text-dark p-0 text-center">
                        <div className="row m-0 p-1 text-center">
                            <img src={`${API_URL}/user/photo/employee/${EmployeeID}/${Math.random().toString(36).slice(2)}`}
                                className="img-fluid img-thumbnail rounded-circle text-center w-auto staff-photo"
                                style={{ height: "250px" }} />
                        </div>
                    </div>
                </div>
                <div className="card-body p-2">
                    <h5 className="staff-name">{Salutation} {EmployeeName}</h5>
                    <h6 className="staff-designation">{DesignationDescription} ({DepartmentDescription})</h6>
                    {/* <h6 className="staff-department">{}</h6> */}
                    <h6 className="staff-phone">{Mobile && Mobile.length > 0 ? (
                        <Fragment>
                            <i className="fa fa-phone mr-1 pt-1"></i>
                            <a href={`tel:${Mobile}`}>{Mobile}</a>
                        </Fragment>
                    ) : ("")}</h6>
                    <h6 className="staff-email">&nbsp;{EmailID && EmailID.length > 0 ? (
                        <Fragment><i className="fa fa-envelope mr-1 pt-1"></i>
                            <a href={`mailto:${EmailID}`}>{EmailID}</a>
                        </Fragment>
                    ) : ("")}</h6>
                </div>
                <div className="card-footer">
                    <div className="row m-0 p-0">
                        <div className="col-8 text-left m-0 p-0">
                            {(TeachingOrNonTeaching === 'T') ? "TEACHING STAFF" : DesignationDescription === 'PRINCIPAL' ? "ADMINISTRATOR" : "NON TEACHING STAFF"}
                        </div>
                        <div className="col-4 text-right m-0 p-0">
                            <strong>{EmployeeCode}</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
