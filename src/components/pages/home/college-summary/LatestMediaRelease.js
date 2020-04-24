import React from 'react';
import moment from 'moment'
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { WEB_URL } from '../../../../config';

export default function LatestMediaRelease() {
    const state = useSelector(state => state.estb);

    const showLatestMedia = () => {
        if (state.loading === false && state.latest_media) {
            return (
                <Link to="/gallery/media">
                    <a href={`${WEB_URL}/Documents/${state.latest_media.FileNameWithPath}`} target="_blank">
                        <div className="col-12 p-1 m-0 text-center text-dark bg-light border border-rounded">
                            <b>Latest Media Release</b>
                            <br />
                            <small className="text-dark">
                                {moment(state.latest_media.EstbDate).format("DD MMM YYYY HH:MM")}
                                <em>  ({moment(state.latest_media.EstbDate).fromNow()}</em>)
                        </small>
                        </div>
                        <div className="col-12 p-0 m-0" style={{ maxHeight: "200px", overflow: "hidden" }}>
                            <img src={`${WEB_URL}/Documents/${state.latest_media.FileNameWithPath}`} className="img img-responsive w-100" alt="" />
                        </div>
                    </a>
                </Link>
            )
        }
        else {
            return <div className="col-12 p-2 m-0 text-center text-dark mb-1 bg-warning">
                <p>...</p>
            </div>
        }
    }

    return (
        <div className="row m-0 p-0 mt-2 mb-4">
            {showLatestMedia()}
        </div>
    );
}
