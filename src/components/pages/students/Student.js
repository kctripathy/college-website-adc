import React from 'react';
import './Students.css';
import { API_URL } from '../../../config';

export default function Student(props) {
    const { StudentID, Salutation, StudentName, RollNo, ClassName, SubjectName, BloodGroup, Mobile, EmailID } = props.student;

    return (

        <div className="col-lg-2 col-md-4 col-sm-6 col-xs-12 student-card mb-2 ">
            <div className="card border-text-muted rounded-0 mb-4 text-center shadow-sm">
                <div className="card-header p-0 text-center">
                    <div className="bg-muted text-dark p-0 text-center">
                        <div className="row m-0 p-1 text-center">
                            <img src={`${API_URL}/user/photo/student/${StudentID}/${Math.random().toString(36).slice(2)}`}
                                className="img-fluid img-thumbnail text-center"
                                style={{ height: "150px", width: "100%" }} />
                        </div>
                    </div>
                </div>
                <div className="card-body p-2">
                    <h6 className="student-name">{Salutation.toUpperCase()} {StudentName}</h6>
                    <h6 className="student-class">{ClassName}</h6>
                    <h6 className="student-class">{SubjectName}</h6>
                    <h6 className="student-email">{EmailID}</h6>
                    {/* <h6 className="student-phone">{Mobile && Mobile.length > 0 ? ("Ph.: " + Mobile) : ("")}</h6> */}
                </div>
                <div className="card-body p-0 m-0">
                    <div className="row m-0 p-0">
                        <div className="col-8 text-left m-0 p-0 pl-2">
                            {RollNo}
                        </div>
                        <div className="col-4 text-right m-0 p-0 pr-2">
                            {BloodGroup && BloodGroup.length > 0 ? BloodGroup : 'N/A'}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
