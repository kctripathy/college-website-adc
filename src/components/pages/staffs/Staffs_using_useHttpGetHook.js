import React, { useState, Fragment } from 'react';
import Layout from '../Layout';
import Staff from './Staff';
import { useHttpGet } from '../../commons/useHttpGet';
import Loading from '../../commons/Loading';



function Staffs() {
    const [Name, setName] = useState("");
    const [loading, staffs] = useHttpGet("staffs");

    const showCollegeStaffs = () => {
        return (
            <Fragment>
                {loading ?
                    (<Loading text="Retriving staffs..." />)
                    :
                    (
                        staffs && staffs.length > 0 &&
                        staffs.map(s => <Staff key={s.EmployeeID} staff={s} />)
                    )
                }
            </Fragment >
        )
    }

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
                            placeholder="Enter name of the staff to search" required />
                        <button className="btn btn-primary"><i className="fa fa-search"></i>  GO  </button>
                    </div>

                </div>
            </div>
        )
    }
    return (
        <Layout title="College Staffs">
            <div className="row">
                {showSearchForm()}
            </div>
            <div className="row m-1 p-1">
                {showCollegeStaffs()}
            </div>
        </Layout>
    );
}

export default Staffs;