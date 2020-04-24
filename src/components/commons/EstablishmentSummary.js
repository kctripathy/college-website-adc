import React from 'react';
import { useDispatch, useSelector } from "react-redux";

export default function EstablishmentSummary() {
    const state = useSelector(state => state.estb);

    return (
        <>
            <table className="table table-bordered table-hover w-100 mt-2">
                <thead>
                    <tr>
                        <th scope="col" className="table-secondary">Establishment </th>
                        <th scope="col" className="table-primary text-center">P</th>
                        <th scope="col" className="table-success text-center">A</th>
                        <th scope="col" className="table-danger text-center">R</th>
                        <th scope="col" className="table-danger text-center">T</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Notices</td>
                        <td className="text-center">-</td>
                        <td className="text-center">-</td>
                        <td className="text-center">-</td>
                        <td className="text-center">{state.count.notice}</td>
                    </tr>
                    <tr>
                        <td>Tenders</td>
                        <td className="text-center">-</td>
                        <td className="text-center">-</td>
                        <td className="text-center">-</td>
                    </tr>
                    <tr>
                        <td>Circulars</td>
                        <td className="text-center">-</td>
                        <td className="text-center">-</td>
                        <td className="text-center">-</td>
                    </tr>
                    <tr>
                        <td>Activities</td>
                        <td className="text-center">-</td>
                        <td className="text-center">-</td>
                        <td className="text-center">-</td>
                    </tr>
                    <tr>
                        <td>Publications</td>
                        <td className="text-center">-</td>
                        <td className="text-center">-</td>
                        <td className="text-center">-</td>
                    </tr>
                    <tr>
                        <td>Photos</td>
                        <td className="text-center">-</td>
                        <td className="text-center">-</td>
                        <td className="text-center">-</td>
                    </tr>
                    <tr>
                        <td>Videos</td>
                        <td className="text-center">-</td>
                        <td className="text-center">-</td>
                        <td className="text-center">-</td>
                    </tr>
                    <tr>
                        <td>Medias</td>
                        <td className="text-center">-</td>
                        <td className="text-center">-</td>
                        <td className="text-center">-</td>
                    </tr>
                    <tr>
                        <td>Syllabus</td>
                        <td className="text-center">-</td>
                        <td className="text-center">-</td>
                        <td className="text-center">-</td>
                    </tr>
                    <tr>
                        <td>Minutes of Meetings</td>
                        <td className="text-center">-</td>
                        <td className="text-center">-</td>
                        <td className="text-center">-</td>
                    </tr>
                    <tr>
                        <td colSpan="4">P: Pending  | A: Approved | R: Rejected  </td>
                    </tr>
                </tbody>
            </table>

        </>
    );
}
