import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";
import LayoutDashboardAdmin from '../pages/LayoutDashboardAdmin';
import CollegeSummary from '../pages/home/college-summary/CollegeSummary';

export default function AdminDashboard() {

    const state = useSelector(state => state.user);
    const student = useSelector(state => state.student);
    const staff = useSelector(state => state.staff);
    const [values, setValues] = useState({
        total_first_year_students: 0,
        total_second_year_students: 0,
        total_third_year_students: 0,
        total_teaching_staffs: 0,
        total_non_teaching_staffs: 0,
        total_students_in_odia: 0,
        total_students_in_english: 0,
        total_students_in_history: 0,
        total_students_in_political_science: 0,
        total_students_in_economics: 0
    });


    useEffect(() => {
        //if (student.loading === false) {
        if (student.students.length > 0) {
            //console.log('student ...', student.students.length);
            const total_first_year_students = student.students.filter(s => s.ClassID === 2).length;
            const total_second_year_students = student.students.filter(s => s.ClassID === 3).length;
            const total_third_year_students = student.students.filter(s => s.ClassID === 4).length;

            setValues({
                ...values,
                total_first_year_students,
                total_second_year_students,
                total_third_year_students
            })
        }
        if (staff.staffs.length > 0) {
            //console.log('staff ------------', staff.staffs.length);
            //console.log('student --------', student.students.length);
            const total_first_year_students = student.students.filter(s => s.ClassID === 2).length;
            const total_second_year_students = student.students.filter(s => s.ClassID === 3).length;
            const total_third_year_students = student.students.filter(s => s.ClassID === 4).length;
            const total_teaching_staffs = staff.staffs.filter(s => s.TeachingOrNonTeaching === 'T').length;
            const total_non_teaching_staffs = staff.staffs.filter(s => s.TeachingOrNonTeaching === 'N').length;

            const total_students_in_odia = student.students.filter(s => s.SubjectName === 'Odia').length;
            const total_students_in_english = student.students.filter(s => s.SubjectName === 'English').length;
            const total_students_in_history = student.students.filter(s => s.SubjectName === 'History').length;
            const total_students_in_political_science = student.students.filter(s => s.SubjectName === 'Political Science').length;
            const total_students_in_economics = student.students.filter(s => s.SubjectName === 'History').length;

            debugger;
            setValues({
                ...values,
                total_first_year_students,
                total_second_year_students,
                total_third_year_students,
                total_teaching_staffs,
                total_non_teaching_staffs,
                total_students_in_odia,
                total_students_in_english,
                total_students_in_history,
                total_students_in_political_science,
                total_students_in_economics
            })
        }
        //};
    }, [staff, student])
    //const { UserName, UserReferenceName,  } = 
    const { UserID, UserName, UserType, UserFirstName, UserReferenceName, RoleID, RoleDescription } = state.loggedOnUser;
    const { total_first_year_students, total_second_year_students, total_third_year_students,
        total_teaching_staffs, total_non_teaching_staffs,
        total_students_in_odia,
        total_students_in_english,
        total_students_in_history,
        total_students_in_political_science,
        total_students_in_economics } = values;
    //console.log('state=', state);
    //console.log('UserName=', UserName);

    return (
        <LayoutDashboardAdmin title="Administrator's Dashboard" >
            <div className="row m-0 p-0">
                <div className="col-4 m-0 p-0">
                    <CollegeSummary />
                </div>
                <div className="col-8 m-0 p-0 text-center">
                    {/* {countStudents()} */}
                    <div className="row m-2 p-0 font-weight-bold" style={{ height: "100px" }}>
                        <div className="list-group-item-success text-primary h-100 col-4 p-4 rounded-top border border-light">
                            +3 1ST YEAR ARTS
                            <h4><span className="badge badge-pill badge-primary pl-4 pr-4">{total_first_year_students}</span></h4>
                        </div>
                        <div className="list-group-item-success text-dark h-100 col-4 p-4 rounded-top border border-light">
                            +3 2ND YEAR ARTS
                            <h4><span className="badge badge-pill badge-dark pl-4 pr-4">{total_second_year_students}</span></h4>
                        </div>
                        <div className="list-group-item-success text-success h-100 col-4 p-4 rounded-top border  border-light">
                            +3 3RD YEAR ARTS
                            <hr className="m-0 p-0 text-center" style={{ height: "1px", width: "100%" }} />
                            <h4><span className="badge badge-pill badge-success pl-4 pr-4">{total_third_year_students}</span></h4>
                        </div>
                    </div>

                    <div className="row m-1 mt-3 p-0 font-weight-bold" style={{ height: "100px" }}>
                        <div className="list-group-item-info text-success h-100 col-6 p-4 rounded-top border border-light">
                            TEACHING STAFFS
                            <h4><span className="badge badge-pill badge-success pl-4 pr-4">{total_teaching_staffs}</span></h4>
                        </div>
                        <div className="list-group-item-info text-secondary h-100 col-6 p-4 rounded-top border border-light">
                            NON TEACHING STAFFS
                            <h4><span className="badge badge-pill badge-secondary pl-4 pr-4">{total_non_teaching_staffs}</span></h4>
                        </div>
                    </div>
                    <div className="card text-dark bg-white p-1 mt-3 border border-text-muted" style={{ maxWidth: "18rem;" }}>
                        <div className="card-header bg-light text-dark">
                            <b>COUNT OF STUDENTS BY SUBJECT TAKEN</b>
                        </div>
                        <div className="card-body p-0 m-0">
                            <div className="row d-flex p-0 m-0">
                                <div className="list-group-item-text-muted text-dark h-100 col-4 p-2 M-0 rounded-top border border-light">
                                    <b>ODIA</b>
                                    <h4><span className="badge badge-pill badge-light pl-4 pr-4">{total_students_in_odia}</span></h4>
                                </div>
                                <div className="list-group-item-text-muted text-dark h-100 col-4 p-2 M-0 rounded-top border border-light">
                                    <b>ENGLISH</b>
                                    <h4><span className="badge badge-pill badge-light pl-4 pr-4">{total_students_in_english}</span></h4>
                                </div>
                                <div className="list-group-item-text-muted text-dark h-100 col-4 p-2 M-0 rounded-top border border-light">
                                    &nbsp;
                                    <h4><span className="pl-4 pr-4">&nbsp;</span></h4>

                                </div>
                                <div className="list-group-item-text-muted text-dark h-100 col-4 p-2 M-0 rounded-top border border-light">
                                    <b>HISTORY</b>
                                    <h4><span className="badge badge-pill badge-light pl-4 pr-4">{total_students_in_history}</span></h4>
                                </div>
                                <div className="list-group-item-text-muted text-dark h-100 col-4 p-2 M-0 rounded-top border border-light">
                                    <b>POLITICAL SCIENCE</b>
                                    <h4><span className="badge badge-pill badge-light pl-4 pr-4">{total_students_in_political_science}</span></h4>
                                </div>
                                <div className="list-group-item-text-muted text-dark h-100 col-4 p-2 M-0 rounded-top border border-light">
                                    <b>ECONOMICS</b>
                                    <h4><span className="badge badge-pill badge-light pl-4 pr-4">{total_students_in_economics}</span></h4>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutDashboardAdmin>
    );
}
