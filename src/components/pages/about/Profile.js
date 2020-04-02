import React from 'react';
import Layout from '../Layout';
import college_profile from "../../../data/profile.json";

function Profile() {

    const { profile, SAMS } = college_profile;

    const showData_Profile = () => (
        <div className="row m-0 p-0">
            <div className="col-lg-4 col-sm-12">
                <div className="card text-center">
                    <div className="card-header">
                        <h5 className="card-title">Principal cum Secratary</h5>
                    </div>
                    <img className="card-img-top img-circle" src={profile.Academic_Bursar.photo} alt="Card image cap" />
                    <div className="card-body">
                        <h6 className="card-subtitle">{profile.Principal_cum_Secratary.name}</h6>
                        <p className="card-text">{profile.Principal_cum_Secratary.designation} - {profile.Principal_cum_Secratary.department}</p>
                    </div>
                </div>
            </div>

            <div className="col-lg-4 col-sm-12">
                <div className="card text-center">
                    <div className="card-header">
                        <h5 className="card-title">Academic Bursar</h5>
                    </div>
                    <img className="card-img-top img-circle" src={profile.Academic_Bursar.photo} alt="Card image cap" />
                    <div className="card-body">
                        <h6 className="card-subtitle">{profile.Academic_Bursar.name}</h6>
                        <p className="card-text">{profile.Academic_Bursar.designation} - {profile.Academic_Bursar.department}</p>
                    </div>
                </div>
            </div>

            <div className="col-lg-4 col-sm-12">
                <div className="card text-center">
                    <div className="card-header">
                        <h5 className="card-title">Account Bursar</h5>
                    </div>
                    <img className="card-img-top img-circle" src={profile.Account_Bursar.photo} alt="Card image cap" />
                    <div className="card-body">
                        <h6 className="card-subtitle">{profile.Account_Bursar.name}</h6>
                        <p className="card-text">{profile.Account_Bursar.designation} - {profile.Account_Bursar.department}</p>
                    </div>
                </div>
            </div>
        </div>

    );

    const showData_SAMS = () => (
        <div className="row mt-4 p-0">
            <div className="col-lg-12 col-sm-12">
                <ul className="list-group  m-0 p-0">
                    <li className="list-group-item list-group-header bg-dark border-dark text-light">
                        <h4 className="card-title m-0 p-0">SAMS (Students Academic Management System)</h4>
                    </li>
                    <li className="list-group-item">
                        <div className="row m-0 p-0">
                            <div className="col-4 font-weight-bold p-2">Principal</div>
                            <div className="col-8 p-2">Prof. Sanatana Sahu, HOD of Political Science</div>
                            <div className="col-4 font-weight-bold p-2">Admission in Charge</div>
                            <div className="col-8 p-2">{SAMS.Admission_in_Charge.name}, {SAMS.Admission_in_Charge.designation} of  {SAMS.Principal.department} </div>
                            <div className="col-4 font-weight-bold p-2">Data Entry Operator</div>
                            <div className="col-8 p-2">{SAMS.Admission_in_Charge.name}, {SAMS.Admission_in_Charge.designation} ({SAMS.Data_Entry_Operator.department})</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );

    const showData_ICAQ = () => (
        <div className="row mt-4 p-0">
            <div className="col-lg-12 col-sm-12">
                <ul className="list-group  m-0 p-0">
                    <li className="list-group-item list-group-header bg-dark text-light">
                        <h4 className="card-title m-0 p-0">IQAC (Internal Quality Accessment Cell)</h4>
                    </li>
                    <li className="list-group-item">
                        <div className="row m-0 p-0">
                            <div className="col-4 font-weight-bold p-2">Principal-cum-Chairman</div>
                            <div className="col-8 p-2">Prof. Sanatana Sahu, HOD of Podivtical Science</div>

                            <div className="col-4 font-weight-bold p-2">Director</div>
                            <div className="col-8 p-2">Prof. Pramod Kumar Chaudhuri, HOD of History </div>

                            <div className="col-4 font-weight-bold p-2">Members</div>
                            <div className="col-8 p-2">
                                <ul className="list-group-x" style={{ listStyleType: "upper-roman", margin: "0px 0px 0px 5px", padding: "0px 0px 0px 15px" }}>
                                    <li className="list-item-1">Prof. Binod Kumar Dash, HOD of Economics</li>
                                    <li className="list-item-1">Prof. Niranjan Satapathy, HOD of Odia</li>
                                    <li className="list-item-1">Prof. Sucharita Kar, HOD of English</li>
                                    <li className="list-item-1">Prof. Bibhuti Bhushan Pradhan, Lect. In. History</li>
                                    <li className="list-item-1">Sri. Raghunath Pani, Asst. Librarian</li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );

    const showData_NAAC = () => (
        <div className="row mt-4 p-0">
            <div className="col-lg-12 col-sm-12">
                <ul className="list-group  m-0 p-0">
                    <li className="list-group-item list-group-header bg-dark border-dark text-light">
                        <h4 className="card-title m-0 p-0">National Assessment and Accreditation Council (NAAC)</h4>
                    </li>
                    <li className="list-group-item">
                        <div className="row m-0 p-0">
                            <div className="col-4 font-weight-bold p-2">In Charge of NAAC</div>
                            <div className="col-8 p-2">Prof. Pramod Kumar Chaudhuri, HOD of History</div>

                            <div className="col-4 font-weight-bold p-2">Co In Charge of NAAC</div>
                            <div className="col-8 p-2">Prof. Biranchi Narayan Pradhan, Lect. in Political Science</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );

    const showData_PIO = () => (
        <div className="row mt-4 p-0">
            <div className="col-lg-12 col-sm-12">
                <ul className="list-group  m-0 p-0">
                    <li className="list-group-item list-group-header bg-dark border-dark text-light">
                        <h4 className="card-title m-0 p-0">Public Information Officer (PIO)</h4>
                    </li>
                    <li className="list-group-item">
                        <div className="row m-0 p-0">
                            <div className="col-4 font-weight-bold p-2">PIO</div>
                            <div className="col-8 p-2">Prof. Pramod Kumar Chaudhuri, HOD of History</div>

                            <div className="col-4 font-weight-bold p-2">Asst. PIO</div>
                            <div className="col-8 p-2">1. Prof. Binod Kumar Dash, HOD of Economics</div>

                            <div className="col-4 font-weight-bold p-2">&nbsp;</div>
                            <div className="col-8 p-2">2. Prof. Niranjan Satapathy, HOD of Odia</div>

                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );

    const showData_AntiRaggingCell = () => (
        <div className="row mt-4 p-0">
            <div className="col-lg-12 col-sm-12">
                <ul className="list-group  m-0 p-0">
                    <li className="list-group-item list-group-header bg-dark border-dark text-light">
                        <h4 className="card-title m-0 p-0">Anti Ragging Cell</h4>
                    </li>
                    <li className="list-group-item">
                        <div className="row m-0 p-0">
                            <div className="col-4 font-weight-bold p-2">Principal cum Chairman</div>
                            <div className="col-8 p-2">Prof. Sanatana Sahu, HOD of Political Science</div>

                            <div className="col-4 font-weight-bold p-2">Members</div>
                            <div className="col-8 p-2">1. Prof. Pramod Kumar Chaudhuri, HOD of History</div>

                            <div className="col-4 font-weight-bold p-2">&nbsp;</div>
                            <div className="col-8 p-2">2. Prof. Binod Kumar Dash, HOD of Economics</div>

                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );

    const showData_NSS = () => (
        <div className="row mt-4 p-0">
            <div className="col-lg-12 col-sm-12">
                <ul className="list-group  m-0 p-0">
                    <li className="list-group-item list-group-header bg-dark border-dark text-light">
                        <h4 className="card-title m-0 p-0">National Service Scheme (NSS)</h4>
                    </li>
                    <li className="list-group-item">
                        <span>The college has three NSS units (Two for Boys and One for Girls)</span>
                        <div className="row m-0 p-0">
                            <div className="col-lg-4 col-sm-12 font-weight-bold p-2">Programme Officer Unit-I (Boys)</div>
                            <div className="col-lg-8 col-sm-12 p-2">Prof. Binod Kumar Dash, HOD of Economics</div>

                            <div className="col-4 font-weight-bold p-2">Programme Officer Unit-II (Boys)</div>
                            <div className="col-8 p-2">Prof. Niranjan  Satapathy, HOD of Odia</div>

                            <div className="col-4 font-weight-bold p-2">Programme Officer Unit-III (Girls)</div>
                            <div className="col-8 p-2">Prof. Pramod Kumar Chaudhuri, HOD of History</div>

                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );

    const showData_YRC_RCC = () => (
        <div className="row mt-4 p-0">
            <div className="col-lg-12 col-sm-12">
                <ul className="list-group  m-0 p-0">
                    <li className="list-group-item list-group-header bg-dark border-dark text-light">
                        <h4 className="card-title m-0 p-0">Youth Red Cross (YRC)  &  Red Ribbon Club (RCC) - (Boys & Girls) </h4>
                    </li>
                    <li className="list-group-item">
                        <div className="row m-0 p-0">
                            <div className="col-4 font-weight-bold p-2">Principal cum Chairman</div>
                            <div className="col-8 p-2">Prof. Sanatana Sahu, HOD of Political Science</div>
                            <div className="col-4 font-weight-bold p-2">Counsellor</div>
                            <div className="col-8 p-2">Mr. Saroj Kumar Nayak, Data Entry Operator</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );

    const showData_ScoutAndGuide = () => (
        <div className="row mt-4 p-0">
            <div className="col-lg-12 col-sm-12">
                <ul className="list-group  m-0 p-0">
                    <li className="list-group-item list-group-header bg-dark border-dark text-light">
                        <h4 className="card-title m-0 p-0">The Bharat Scout & Guide (Boys & Girls)</h4>
                    </li>
                    <li className="list-group-item">
                        <div className="row m-0 p-0">
                            <div className="col-4 font-weight-bold p-2">Principal cum Chairman</div>
                            <div className="col-8 p-2">Prof. Sanatana Sahu, HOD of Political Science</div>
                            <div className="col-4 font-weight-bold p-2">Range Leader</div>
                            <div className="col-8 p-2">Prof. Sucharita Kar, HOD of English</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );

    const showData_StudentUnion = () => (
        <div className="row mt-4 p-0">
            <div className="col-lg-12 col-sm-12">
                <ul className="list-group  m-0 p-0">
                    <li className="list-group-item list-group-header bg-dark border-dark text-light">
                        <h4 className="card-title m-0 p-0">Student's Union </h4>
                    </li>
                    <li className="list-group-item">
                        <div className="row m-0 p-0">
                            <div className="col-4 font-weight-bold p-2">Union Adviser</div>
                            <div className="col-8 p-2">Prof. Binod Kumar Dash, HOD of Economics</div>
                            <div className="col-4 font-weight-bold p-2">Asst. Adviser</div>
                            <div className="col-8 p-2">Prof. Sucharita Kar, HOD of English</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );

    const showData_AthleticAssociation = () => (
        <div className="row mt-4 p-0">
            <div className="col-lg-12 col-sm-12">
                <ul className="list-group  m-0 p-0">
                    <li className="list-group-item list-group-header bg-dark border-dark text-light">
                        <h4 className="card-title m-0 p-0">Athletic Association</h4>
                    </li>
                    <li className="list-group-item">
                        <div className="row m-0 p-0">
                            <div className="col-4 font-weight-bold p-2">President</div>
                            <div className="col-8 p-2">Prof. Sanatana Sahu, HOD of Political Science</div>
                            <div className="col-4 font-weight-bold p-2">Asst. Adviser</div>
                            <div className="col-8 p-2">Prof. Niranjan Satapathy,  HOD of Odia</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );

    const showData_DramaticAssociation = () => (
        <div className="row mt-4 p-0">
            <div className="col-lg-12 col-sm-12">
                <ul className="list-group  m-0 p-0">
                    <li className="list-group-item list-group-header bg-dark border-dark text-light">
                        <h4 className="card-title m-0 p-0">Dramatic Association</h4>
                    </li>
                    <li className="list-group-item">
                        <div className="row m-0 p-0">
                            <div className="col-4 font-weight-bold p-2">Adviser</div>
                            <div className="col-8 p-2">Prof. Bibhuti Bhushan Pradhan, Lect. In. History</div>
                            <div className="col-4 font-weight-bold p-2">Asst. Adviser</div>
                            <div className="col-8 p-2">Prof. Biranchi Narayan Pradhan, Lect. In. Political Science</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );


    const showData_CulturalAssociation = () => (
        <div className="row mt-4 p-0">
            <div className="col-lg-12 col-sm-12">
                <ul className="list-group  m-0 p-0">
                    <li className="list-group-item list-group-header bg-dark border-dark text-light">
                        <h4 className="card-title m-0 p-0">Cultural Association</h4>
                    </li>
                    <li className="list-group-item">
                        <div className="row m-0 p-0">
                            <div className="col-4 font-weight-bold p-2">Adviser</div>
                            <div className="col-8 p-2">Prof. Bibhuti Bhushan Pradhan, Lect. In. History</div>
                            <div className="col-4 font-weight-bold p-2">Asst. Adviser</div>
                            <div className="col-8 p-2">Prof. Sucharita Kar, HOD of English</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );

    return (
        <Layout >
            <div className="row">
                <div className="col-lg-2 col-xs-2">&nbsp;</div>
                <div className="col-lg-8 col-xs-8 p-2">
                    <h4 className="mb-4">College Profile</h4>
                    {showData_Profile()}
                    {showData_ICAQ()}
                    {showData_SAMS()}
                    {showData_NAAC()}
                    {showData_AntiRaggingCell()}
                    {showData_PIO()}
                    {showData_NSS()}
                    {showData_YRC_RCC()}
                    {showData_ScoutAndGuide()}
                    {showData_StudentUnion()}
                    {showData_AthleticAssociation()}
                    {showData_DramaticAssociation()}
                    {showData_CulturalAssociation()}
                </div>
                <div className="col-lg-2 col-xs-2">&nbsp;</div>
            </div>
        </Layout>
    );
}

export default Profile;