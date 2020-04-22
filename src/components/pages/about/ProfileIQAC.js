import React, { Fragment } from 'react';
import college_profile from "../../../data/profile.json";
//import { API_URL } from '../../../config';
import PersonImage from '../../commons/PersonImage';

export default function ProfileIQAC({ title, willshowPhoto }) {
    const { IQAC } = college_profile;

    const showMembers = () => {
        //debugger;
        //console.log(IQAC);
        return IQAC && IQAC.Members && IQAC.Members.length > 0 &&
            IQAC.Members.map((m) => {
                return <Fragment key={m.id}>
                    <div className="col-lg-3 col-sm-12 m-0 p-0 text-center">
                        {/* <img className="img-fluid img-thumbnail rounded-circle p-1 m-1"
                            style={{ height: "75px" }}
                            src={`${API_URL}/user/photo/employee/${m.id}/1`}
                            alt={m.name} /> */}
                        <PersonImage usertype="employee" id={m.id} photo_url={m.photo} />
                    </div>
                    <div className="col-lg-9 col-sm-12 m-0 p-0 pt-3 pb-1 text-center">
                        {m.name} <br /> <small>{`${m.designation} - ${m.department}`}</small>
                    </div>
                    <div className="col-12 m-0 p-0"><hr /></div>
                </Fragment>
            })
    }
    const showData_ICAQ = () => (
        <div className="row mt-4 p-0">
            <div className="col-lg-12 col-sm-12">
                <ul className="list-group  m-0 p-0">
                    <li className="list-group-item list-group-header bg-section text-dark">
                        <h4 className="card-title m-0 p-0">
                            {title && title.length > 0 ? title : 'Internal Quality Accessment Cell(IQAC)'}
                        </h4>
                    </li>
                    <li className="list-group-item">
                        <div className="row m-0 p-0">
                            <div className="col-lg-4 col-sm-12 font-weight-bold p-2 pt-4 text-center">
                                Principal-cum-Chairman
                            </div>
                            <div className="col-lg-8 col-sm-12 p-2">
                                <div className="row m-0 p-0">
                                    <div className="col-lg-3 col-ms-12 text-center">
                                        <PersonImage usertype="employee" id={IQAC.Principal.id} />
                                    </div>
                                    <div className="col-lg-9 col-ms-12 text-center pt-3">
                                        {IQAC.Principal.name} <br />
                                        <small>{`${IQAC.Principal.designation} - ${IQAC.Principal.department}`}</small>
                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-12" style={{ height: "1px", border: "solid 1px #eee" }}>&nbsp;</div>
                            <div className="col-lg-4 col-sm-12 font-weight-bold p-2 pt-4 text-center">Director</div>
                            <div className="col-lg-8 col-sm-12 p-2">
                                <div className="row m-0 p-0">
                                    <div className="col-lg-3 col-ms-12 text-center">
                                        <PersonImage usertype="employee" id={IQAC.Director.id} />
                                    </div>
                                    <div className="col-lg-9 col-ms-12 text-center pt-3">
                                        {IQAC.Director.name} <br />
                                        <small>{`${IQAC.Director.designation} - ${IQAC.Director.department}`}</small>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12" style={{ height: "1px", border: "solid 1px #eee" }}>&nbsp;</div>
                            <div className="col-lg-4 col-sm-12 font-weight-bold p-2 text-center">Members</div>
                            <div className="col-lg-8 col-sm-12 p-2">
                                <div className="row m-0 p-0 d-flex">
                                    {showMembers()}
                                </div>
                                {/* <ul className="list-group-x" style={{ listStyleType: "upper-roman", margin: "0px 0px 0px 5px", padding: "0px 0px 0px 15px" }}>
                                    <li className="list-item-1">Prof. Binod Kumar Dash, HOD of Economics</li>
                                    <li className="list-item-1">Prof. Niranjan Satapathy, HOD of Odia</li>
                                    <li className="list-item-1">Prof. Sucharita Kar, HOD of English</li>
                                    <li className="list-item-1">Prof. Bibhuti Bhushan Pradhan, Lect. In. History</li>
                                    <li className="list-item-1">Sri. Raghunath Pani, Asst. Librarian</li>
                                </ul> */}
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
    return (
        <>
            {showData_ICAQ()}
        </>
    );
}
