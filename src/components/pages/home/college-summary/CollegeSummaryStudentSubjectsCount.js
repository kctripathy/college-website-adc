import React from 'react';
import { useSelector } from "react-redux";

export default function CollegeSummaryStudentSubjectsCount() {
    const student = useSelector(state => state.student);

    return (
        <div className="card text-dark bg-white p-1 mt-3 border border-text-muted" >
            <div className="card-header bg-light text-dark">
                <b>COUNT OF STUDENTS BY SUBJECT TAKEN</b>
            </div>
            <div className="card-body p-0 m-0">
                <div className="row d-flex p-0 m-0">
                    <div className="list-group-item-text-muted text-dark h-100 col-lg-3 col-sm-6 p-2 M-0 rounded-top border border-light">
                        <b>ODIA</b>
                        <h4><span className="badge badge-pill badge-light pl-4 pr-4">{student.count.total_students_in_subject.odia}</span></h4>
                    </div>
                    <div className="list-group-item-text-muted text-dark h-100 col-lg-3 col-sm-6 p-2 M-0 rounded-top border border-light">
                        <b>HISTORY</b>
                        <h4><span className="badge badge-pill badge-light pl-4 pr-4">{student.count.total_students_in_subject.history}</span></h4>
                    </div>
                    <div className="list-group-item-text-muted text-dark h-100 col-lg-3 col-sm-6 p-2 M-0 rounded-top border border-light">
                        <b>POL. SCIENCE</b>
                        <h4><span className="badge badge-pill badge-light pl-4 pr-4">{student.count.total_students_in_subject.political_science}</span></h4>
                    </div>
                    <div className="list-group-item-text-muted text-dark h-100 col-lg-3 col-sm-6 p-2 M-0 rounded-top border border-light">
                        <b>ECONOMICS</b>
                        <h4><span className="badge badge-pill badge-light pl-4 pr-4">{student.count.total_students_in_subject.economics}</span></h4>
                    </div>


                </div>
            </div>
        </div>

    );
}
