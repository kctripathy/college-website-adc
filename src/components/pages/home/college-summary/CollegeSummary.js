import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { fetchStudents } from '../../../../actionMethods/studentActionMethods';
import { fetchStaffs } from '../../../../actionMethods/staffActionMethods';
import { fetchBooks } from '../../../../actionMethods/bookActionMethods';
import { fetchEstablishments } from '../../../../actionMethods/estbActionMethods';

import Counter from '../../../commons/Counter';
import Spinner from '../../../commons/Spinner';

import './CollegeSummary.css';

const CollegeSummary = () => {
    const students = useSelector(state => state.student);
    const staffs = useSelector(state => state.staff);
    //const books = useSelector(state => state.book);
    const estb = useSelector(state => state.estb);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchStudents());
        dispatch(fetchStaffs());
        //dispatch(fetchBooks());
        dispatch(fetchEstablishments());
    }, []);

    // const showTotalPublications = () => {
    //     if (estb && estb.establishments.length === 0) {
    //         return (<Spinner />);
    //     };

    //     const publCodes = ['1', '2', '3', '4', '5', '6'];
    //     const filteredArray = estb.establishments
    //         && estb.establishments.length > 0
    //         && estb.establishments.filter(array =>
    //             publCodes.some(filter => (filter === array.EstbTypeCode || array.EstbTypeCode.substring(0, 1) === 'P'))
    //         );

    //     return <Counter value={filteredArray.length} />;
    // }

    //console.log("state=", state);
    return (
        <div className="row m-0 p-0">

            <div className="col-lg-12 col-sm-12 m-0 mt-2 p-2 border-dark">
                <Link to="/staffs" className="text-info">
                    <i className="fa fa-chalkboard-teacher fa-2x  mr-2  p-2"></i>
                    <strong className="text-large">STAFFS:
                    <span className="badge badge-info m-2 p-2 total" style={{ float: "right" }}>
                            {staffs && staffs.count === 0 ? (<Spinner />) : (<Counter value={staffs.count} />)}
                        </span>
                    </strong>
                    <span className="badge badge-info total w-100">
                        Teaching Staffs : {staffs.total_teaching_staffs}
                        <hr style={{ height: "1px", margin: "3px", padding: "0px" }} />
                        Non Teaching Staffs: {staffs.total_non_teaching_staffs}

                    </span>
                </Link>
            </div>

            <div className="col-lg-12 col-sm-12 total m-0 p-2">
                <Link to="/students" className="text-success">
                    <i className="fa fa-user-graduate fa-2x mr-2 p-2"></i>
                    <strong className="text-large">
                        STUDENTS:
                        <span className="total badge badge-success">
                            {students && students.count.total === 0 ? (<Spinner />) : (<Counter value={students.count.total} />)}
                        </span>
                    </strong>
                    <div className=" w-100 m-0 p-0 text-center text-dark-green">
                        <span className="d-block f-left">Boys : <strong>{students.count.total_male}</strong></span>
                        <span className="d-block f-right">Girls : <strong>{students.count.total_female}</strong></span>
                    </div>
                    <hr style={{ height: "1px", margin: "2px", padding: "0px" }} />
                    <div className="w-100 m-1 p-1 mt-2 d-grid text-dark-green">
                        <div className="sub-total-left">+3 Arts 1st Year</div>
                        <div className="sub-total-right badge badge-success">{students.count.total_students_first_year}</div>
                        <div className="sub-total-left">+3 Arts 2nd Year</div>
                        <div className="sub-total-right  badge badge-success">{students.count.total_students_second_year}</div>
                        <div className="sub-total-left">+3 Arts 3rd Year</div>
                        <div className="sub-total-right  badge badge-success">{students.count.total_students_third_year}</div>
                    </div>


                </Link>
            </div>

            <div className="col-lg-12 col-sm-12 total category m-0 p-0 mr-2 text-success">
                <div className="category-label">General</div>
                <div className="category-value">{students.count.total_category_general}</div>
                <div className="category-label">OBC</div>
                <div className="category-value">{students.count.total_category_OBC}</div>
                <div className="category-label">SC</div>
                <div className="category-value">{students.count.total_category_SC}</div>
                <div className="category-label">ST</div>
                <div className="category-value">{students.count.total_category_ST}</div>
                <div className="category-label">Other</div>
                <div className="category-value">{students.count.total_category_others}</div>
            </div>

            {/* <li className="list-group-item list-group-item-warning m-2 p-4">
                <Link to="/library" style={{ color: "rgb(215, 132, 30)", fontWeight: "bold" }}>
                    <i className="fa fa-book  fa-2x  mr-2  p-2"></i>
                    <strong className="text-large">Books</strong>
                    <span className="badge badge-warning total">
                        {books && books.count === 0 ? (<Spinner />) : (books.count)}                       
                    </span>
                </Link>
            </li> */}
            {/* <li className="list-group-item list-group-item-danger m-2 mb-2 p-2">
                <Link to="/academic/publications" style={{ color: "#dc3545", fontWeight: "bold" }}>
                    <i className="fa fa-newspaper fa-2x mr-2 p-2"></i>
                    <strong className="text-large">Publications</strong>
                    <span className="badge badge-danger total w-100">
                        {showTotalPublications()}
                    </span>
                </Link>
            </li> */}
        </div>
    )
};

export default CollegeSummary;