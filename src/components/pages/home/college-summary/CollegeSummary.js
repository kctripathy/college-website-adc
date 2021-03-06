import React, { useEffect } from 'react';
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
    const books = useSelector(state => state.book);
    const estb = useSelector(state => state.estb);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchStudents());
        dispatch(fetchStaffs());
        dispatch(fetchBooks());
        dispatch(fetchEstablishments());
    }, []);

    const showTotalPublications = () => {
        if (estb && estb.establishments.length === 0) {
            return (<Spinner />);
        };
        //debugger;
        console.log("estb.establishments=", estb.establishments);

        const publCodes = ['1', '2', '3', '4', '5', '6'];
        const filteredArray = estb.establishments && estb.establishments.filter(array =>
            publCodes.some(filter => filter === array.EstbTypeCode)
        );
        //console.log('filteredArray=', filteredArray)
        //debugger;
        return <Counter value={filteredArray.length} />;
    }
    //console.log("state=", state);
    return (
        <ul className="list-group">
            <li className="list-group-item list-group-item-success m-2 p-4">
                <i className="fa fa-user-graduate fa-2x mr-2 p-2"></i>
                <strong className="text-large">Students</strong>
                <span className="badge badge-success total">
                    {students && students.count === 0 ? (<Spinner />) : (<Counter value={students.count} />)}
                    {/* <NumberCounter end={students.count} delay={4} /> */}
                </span>
            </li>
            <li className="list-group-item list-group-item-info  m-2 p-4">
                <i className="fa fa-chalkboard-teacher fa-2x  mr-2  p-2"></i>
                <strong className="text-large">Staffs</strong>
                <span className="badge badge-info total">
                    {staffs && staffs.count === 0 ? (<Spinner />) : (<Counter value={staffs.count} />)}
                </span>
            </li>
            <li className="list-group-item list-group-item-warning m-2 p-4">
                <i className="fa fa-book  fa-2x  mr-2  p-2"></i>
                <strong className="text-large">Library Books</strong>
                <span className="badge badge-warning total">
                    {books && books.count === 0 ? (<Spinner />) : (books.count)}
                    {/* {books && books.count === 0 ? (<Spinner />) : (<Counter value={books.count} />)} */}
                </span>
            </li>
            <li className="list-group-item list-group-item-danger  m-2 p-4">
                <i className="fa fa-newspaper fa-2x mr-2 p-2"></i>
                <strong className="text-large">Publications</strong>
                <span className="badge badge-danger total">
                    {showTotalPublications()}
                </span>
            </li>
        </ul>
    )
};

export default CollegeSummary;