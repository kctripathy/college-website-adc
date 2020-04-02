import React from 'react';

const ProfileItem = ({ title, role, name, designation, department, memmbers }) => {
    return (
        <div className="row mt-4 p-0">
            <div className="col-lg-12 col-sm-12">
                <ul className="list-group  m-0 p-0">
                    <li className="list-group-item list-group-header bg-light text-dark">
                        <h4 className="card-title m-0 p-0">{title}</h4>
                    </li>
                    <li className="list-group-item">
                        <div className="row m-0 p-0">
                            <div className="col-4 font-weight-bold p-2">{role}</div>
                            <div className="col-8 p-2">{name}, {designation} - {department}</div>

                            <div className="col-4 font-weight-bold p-2">Director</div>
                            <div className="col-8 p-2">Prof. Pramod Kumar Chaudhuri, HOD of History </div>
                            {
                                memmbers && memmbers.length === 0 ? ('') : (
                                    <>
                                        <div className="col-4 font-weight-bold p-2">Members</div>
                                        {memmbers.map(m => {
                                            return <div className="col-8 p-2">
                                                <ul className="list-group-x" style={{ listStyleType: "upper-roman", margin: "0px 0px 0px 5px", padding: "0px 0px 0px 15px" }}>
                                                    <li className="list-item-1">Prof. Binod Kumar Dash, HOD of Economics</li>
                                                    <li className="list-item-1">Prof. Niranjan Satapathy, HOD of Odia</li>
                                                    <li className="list-item-1">Prof. Sucharita Kar, HOD of English</li>
                                                    <li className="list-item-1">Prof. Bibhuti Bhushan Pradhan, Lect. In. History</li>
                                                    <li className="list-item-1">Sri. Raghunath Pani, Asst. Librarian</li>
                                                </ul>
                                            </div>
                                        })
                                        }
                                    </>
                                )
                            }
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
};
export default ProfileItem;
