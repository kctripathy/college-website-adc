import React from 'react';
import { Link } from 'react-router-dom';
import NumberCounter from 'number-counter';

export default function CollegeSnapshotCard(props) {
    return (
        <>
            <div className="card m-0 mb-4 p-0 text-center ">
                <div className={`p-2 card-body ${props.color} `}>
                    <h5 className="card-title">
                        {/* {props.count ? props.count : ''} */}
                        <NumberCounter end={props.count ? Number(props.count) : 0} delay={4} />
                        {/* <NumberCounter end={500} delay={4} /> */}
                    </h5>
                    <h6 className="card-subtitle mb-2 alert-link">{props.title}</h6>
                    {/* <p className="card-text">Some quick example text to build tent.</p> */}
                    <Link to={`/${props.title.toLowerCase()}`}>Details</Link>
                </div>
            </div>
        </>
    );
}
