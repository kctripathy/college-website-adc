import React from 'react';
import PofileIQAC from '../about/ProfileIQAC';

export default function InternalQualityAssuranceCell() {
    return (
        <div className="row m-4">
            <div className="col-lg-2 col-sm-12">&nbsp;</div>
            <div className="col-lg-8 col-sm-12">

                <img className="text-wrap" src="http://rajendracollege.nic.in/images/iqac_logo.png" style={{ height: "150px", float: "left" }} />

                <p>Internal Quality Assurance Cell (IQAC) has been established to regulate the post- accreditation quality sustenance activity and to develop a quality system for conscious, consistent and catalytic programmed action to improve the academic and administrative performance of the HEIS. To promote measures for institutional functioning towards quality enhancement the IQAC will become a part of the institution's system and work towards realization of the goals of quality enhancement and sustenance. It evolves mechanisms and procedures for:</p>
                <ul>
                    <li>Ensuring timely, efficient and progressive performance of academic, administrative and financial tasks.</li>
                    <li>The relevance and quality of academic and research programs.</li>
                    <li>Equitable access to and affordability of academic programs for various sections of society.</li>
                    <li>Optimization and integration of modern methods of teaching and learning.</li>
                    <li>The credibility of evaluation procedures. </li>
                    <li>Ensuring the adequacy, maintenance and functioning of the support structure and services.</li>
                    <li>Research sharing and networking with other institutions in India and abroad.</li>
                </ul>
                <PofileIQAC title="Co-ordinator and Members of College IQAC (Internal Quality Accessment Cell)" willshowPhoto={true} />
                {/* <div className="row mt-4 mb-4 p-0">
                    <div className="col-lg-12 col-sm-12">
                        <ul className="list-group  m-0 p-0">
                            <li className="list-group-item list-group-header bg-section text-dark">
                                <h4 className="card-title m-0 p-0">Co-ordinator & Members of College IQAC (Internal Quality Accessment Cell)</h4>
                            </li>
                            <li className="list-group-item">
                                <div className="row m-0 p-0">
                                    <div className="col-4 font-weight-bold p-2">Principal-cum-Chairman</div>
                                    <div className="col-8 p-2">Prof. Sanatana Sahu, HOD of Political Science</div>

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
                </div> */}


                <p><strong>We are committed to provide Excellent Quality Education in Arts as per UGC, </strong> Berhampur University and Government of Odisha norms to create multidisciplinary best citizens, and to satisfy the students and parents requirements through continual improvements in Quality of Education Services.”</p>
                <p>The College Internal Quality Assurance Cell (IQAC) was established on <font color="red">11th February 2010</font> and since then it has been functioning actively of our Academic and Administrative activities. “Quality Policy” is the major objective of our IQAC through continuous monitoring and constant follow-up  of undergoing activities.</p>
                <p>As per the guidelines from NAAC:<br />
                “The prime task of the IQAC is to develop a system for conscious, consistent and catalytic improvement in the overall performance of institutions. For this, during the post-accreditation period, it will channelize all efforts and measures of the institution towards promoting its holistic academic excellence.”</p>
            </div>
            <div className="col-lg-2 col-sm-12">&nbsp;</div>
        </div>
    );
}
