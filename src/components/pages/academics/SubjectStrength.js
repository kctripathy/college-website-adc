import React from 'react';

export default function SubjectStrength() {

    const showCompulsorySubject = () => (
        <table className="table table-bordered table-hover">
            <thead>
                <tr className="table-success">
                    <th scope="col">Compulsory Subject</th>
                    <th scope="col" className="text-center">Seat</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>MIL (Odia)</td>
                    <td className="text-center">256</td>
                </tr>
                <tr>
                    <td>Communicative English</td>
                    <td className="text-center">256</td>
                </tr>
                <tr>
                    <td>Environmental Studies (EVS)</td>
                    <td className="text-center">256</td>
                </tr>
                <tr>
                    <td>Travel & Tourism</td>
                    <td className="text-center">256</td>
                </tr>
            </tbody>
        </table>
    );

    const showHonorsSubject = () => (
        <table className="table table-bordered table-hover">
            <thead>
                <tr className="table-warning">
                    <th scope="col">Honors Subject</th>
                    <th scope="col" className="text-center">Seat</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Economics</td>
                    <td className="text-center">16</td>
                </tr>
                <tr>
                    <td>History</td>
                    <td className="text-center">80</td>
                </tr>
                <tr>
                    <td>Odia</td>
                    <td className="text-center">64</td>
                </tr>
                <tr>
                    <td>Political Science</td>
                    <td className="text-center">96</td>
                </tr>
                <tr>
                    <td className="text-right">Total Strength</td>
                    <td className="text-center">256</td>
                </tr>
            </tbody>
        </table>
    );

    const showElectiveSubject = () => (
        <table className="table table-bordered table-hover">
            <thead>
                <tr className="table-primary">
                    <th scope="col">Elective Subject </th>
                    <th scope="col" className="text-center">Seat</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Economics</td>
                    <td className="text-center">256</td>
                </tr>
                <tr>
                    <td>History</td>
                    <td className="text-center">256</td>
                </tr>
                <tr>
                    <td>Odia</td>
                    <td className="text-center">256</td>
                </tr>
                <tr>
                    <td>Political Science</td>
                    <td className="text-center">256</td>
                </tr>
            </tbody>
        </table>
    );


    return (
        <div className="row m-0 p-0 d-flex">
            <div className="col-12 p-2 text-center">
                <h5>Sanctioned Strength =256</h5>
            </div>
            <div className="col-lg-1 col-sm-12">&nbsp;</div>
            <div className="col-lg-10 col-sm-12 m-0 p-0">
                <div className="row m-0 p-0">
                    <div className="col-lg-4 col-sm-12 col-xs-12">{showCompulsorySubject()}</div>
                    <div className="col-lg-4 col-sm-12 col-xs-12">{showHonorsSubject()}</div>
                    <div className="col-lg-4 col-sm-12 col-xs-12">{showElectiveSubject()}</div>
                </div>
            </div>
            <div className="col-1">&nbsp;</div>
        </div>
    );
}
