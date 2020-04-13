import React, { Fragment } from 'react';
import titleCase, { upperCase } from '../../commons/CommonFunctions';

import './Students.css';

export default function StudentUnionCard(props) {

    const { year, election_date, description, president, vice_president, general_secretary, joint_secretary } = props.portfolio;

    return (
        <Fragment>
            <div className="row m-0 p-0 mt-4" style={{ border: "solid 1px #ddd" }}>
                <div className="col-lg-12 col-sm-12 text-left pl-4 bg-section text-dark">
                    <h5 className="portfolio-year">
                        <span>Student's Union for the Session : {year}</span>
                    </h5>

                </div>
                <div className="col-lg-12 col-sm-12 text-left pl-4 pt-2" >
                    <p>
                        {election_date !== null ? (<p style={{ display: 'none' }}>{`Date of Election: ${election_date} `}</p>) : ""}
                        {description}
                    </p>
                </div>
                <div className="row m-0 p-0 mt-2">
                    <div className="col-12 d-flex">
                        {
                            props.portfolio && Object.keys(props.portfolio).map(key => {
                                //console.log('key=', key, 'value = ', props.portfolio[key])
                                if (key !== 'year' && key !== 'election_date' && key !== 'description'
                                    && props.portfolio
                                    && props.portfolio.election_date != null) {
                                    const { student_name, student_class, roll_no, photo } = props.portfolio[key];
                                    return <div className="card m-2 p-0 w-100">
                                        <div className="card-header m-0 p-1">
                                            <div className="row m-0 p-0">
                                                <div className="col-12 m-0 p-1">
                                                    <img src={`../images/students_union/${year}/${photo}`}
                                                        className="img-thumbnail img-reponsive rounded-circle"
                                                    />
                                                </div>

                                            </div>
                                        </div>
                                        <div className="card-body p-2 text-center">
                                            <b>{upperCase(key.replace(/_/g, " "))}</b>
                                        </div>
                                        <div className="card-footer tex-center m-0 p-0" style={{ backgroundColor: "#ffffff" }}>
                                            <span className="portfolio-name">{student_name && titleCase(student_name.replace(/_/g, " "))}</span>
                                            <span className="portfolio-class">{student_class}</span>
                                            <span className="portfolio-roll-no">{roll_no}</span>
                                        </div>
                                    </div>

                                }

                            })
                        }
                    </div>

                </div>
            </div>
        </Fragment >
    );
}
