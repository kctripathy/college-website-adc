import React, { useState, useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Layout from '../Layout';
import Staff from './Staff';
import Loading from '../../commons/Loading';
import { fetchStaffs } from '../../../actionMethods/staffActionMethods';

import SelectDepartments from '../../commons/SelectDepartments';
import StaffsGridView from './StaffsGridView';
import StaffsListView from './StaffsListView';


function Staffs() {
    const state = useSelector(state => state.staff);
    const dispatch = useDispatch();
    const [Name, setName] = useState("");
    const [view, setView] = useState('list');
    const [searchResult, setSearchResult] = useState([]);


    useEffect(() => {
        if (state.staffs.length === 0) {
            dispatch(fetchStaffs());
        }
    }, []);

    const handleView = (currentViewMode) => setView(currentViewMode);

    const showStaffs = () => {
        //console.log("showCollegeStaffs - state = ", state)
        return (
            <Fragment>
                {state.loading ?
                    (<Loading text="Retriving staffs..." />)
                    :
                    (
                        view === 'list' ?
                            (<StaffsListView staffs={state.staffs} />) :
                            (<StaffsGridView staffs={state.staffs} />)

                    )
                }
            </Fragment >
        )
    };

    const showSearchForm = () => {
        return (
            <div className="col-12">
                <div className="form-group">
                    <div className="input-group mb-2">
                        <div className="input-group-prepend">
                            <div className="input-group-text">Search</div>
                        </div>
                        <input
                            type="text"
                            className="form-control"
                            id="user_name"
                            name="user_name"
                            value={Name}
                            onChange={(e) => setName(e.target.value)}
                            minLength="4"
                            placeholder="Enter name of the staff to search (minimum 4 alphabets)" required />

                        <button className="btn btn-outline-primary ml-1" onClick={searchStaff}>
                            <i className="fa fa-search"></i>
                        </button>
                        <button type="button" className="btn btn-outline-primary ml-1" onClick={clearSearchResult}>
                            X
                        </button>
                    </div>
                </div>
            </div>
        )
    };

    const searchStaff = (e) => {
        e.preventDefault();
        //dispatch(fetchStudentSearch(Name));
        const newArray = state.staffs.filter(s => s.EmployeeName.toUpperCase().includes(Name.toUpperCase()));
        setSearchResult(newArray);
    };

    const showSearchResult = () => {
        return (
            <Fragment>
                {searchResult === null || searchResult.length === 0 ?
                    ('')
                    :
                    (
                        searchResult && searchResult.length > 0 &&
                        searchResult.map(s => <Staff key={s.EmployeeID} staff={s} />)
                    )
                }
            </Fragment >
        )
    };

    const showSearchResultHeader = () => {
        return (
            <Fragment>
                {searchResult === null || searchResult.length === 0 ?
                    ('')
                    :
                    (
                        <h6>Search Result:  {searchResult.length} records found.</h6>
                    )
                }
            </Fragment >
        )
    };

    const clearSearchResult = () => {
        setName("");
        setSearchResult([]);
    };

    const handleDepartmentOnChange = selectedOptions => {

        if (selectedOptions == null) {
            setSearchResult([]);
            return;
        }
        console.log("selected depts ", selectedOptions);

        const filteredArray = state.staffs.filter(array =>
            selectedOptions.some(filter => filter.value === array.DepartmentID)
        );

        setSearchResult(filteredArray);
    };

    return (
        <Layout title="Staffs" handleView={(mode) => handleView(mode)}>
            <div className="row">
                <div className="col-lg-6 col-sm-5">
                    <SelectDepartments onChange={(v) => handleDepartmentOnChange(v)} staffs={state.staffs} />
                </div>
                <div className="col-lg-6 col-sm-7">
                    {showSearchForm()}
                </div>

            </div>
            <div className="row m-1 p-1 bg-adc" style={{ display: searchResult !== null && searchResult.length > 0 ? '' : 'none' }}>
                {showSearchResultHeader()}
            </div>
            <div className="row m-1 p-1 bg-adc" style={{ display: searchResult !== null && searchResult.length > 0 ? '' : 'none' }}>
                {showSearchResult()}
            </div>
            <div className="row m-1 p-1">
                {showStaffs()}
            </div>
        </Layout>
    );
}

export default Staffs;