import React, { Fragment } from 'react';
import titleCase, { upperCase } from '../../commons/CommonFunctions';

import './Students.css';

export default function StudentUnionCard(props) {

    const { year, president, vice_president, general_secretary, joint_secretary } = props.portfolio;

    return (
        <Fragment>
            <div className="row">
                <div className="col-lg-12 col-sm-12 text-left pl-4 bg-dark text-light">
                    <h5 className="portfolio-year"><span>Student's Union for the Session : {year}</span></h5>
                </div>
                <div className="row m-0 p-0">
                    {
                        Object.keys(props.portfolio).map(key => {
                            //console.log('key=', key, 'value = ', props.portfolio[key])
                            if (key !== 'year') {
                                const { student_name, student_class, roll_no, photo } = props.portfolio[key];
                                return <div key={key} className="col-lg-3 col-sm-12">
                                    <div className="card m-2 p-0">
                                        <div className="card-header m-0 p-1 portfolio-card-header">
                                            <div className="row m-0 p-0">
                                                <div className="col-12 m-0 p-0">
                                                    <img src={`../images/students_union/${year}/${photo}`}
                                                        className="portfolio-photo img-reponsive w-100 m-0 p-0"
                                                    />
                                                </div>

                                            </div>
                                        </div>
                                        <div className="card-body p-2 text-center">
                                            <b>{upperCase(key.replace(/_/g, " "))}</b>
                                            <span className="portfolio-name">{titleCase(student_name.replace(/_/g, " "))}</span>
                                            <span className="portfolio-class">{student_class}</span>
                                            <span className="portfolio-roll-no">Roll# {roll_no}</span>
                                        </div>
                                    </div>
                                </div>
                            }

                        })
                    }
                </div>
            </div>
        </Fragment >
    );
}
