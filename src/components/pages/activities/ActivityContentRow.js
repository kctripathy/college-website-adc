import React from 'react';
import moment from 'moment';
import ThumbnailImage from '../../commons/ThumbnailImage';
import ThumbnailDocument from '../../commons/ThumbnailDocument';
import { isAnImage } from '../../commons/CommonFunctions';

export default function ActivityContentRow(props) {
    //console.log("....props", props)
    return (
        <div className="row m-0 p-0 d-flex mb-2 mt-2" style={{ borderBottom: "solid 1px #ddd" }}>
            <div className="col-lg-2 col-sm-12 m-0 p-1">
                {isAnImage(props.establishment.FileNameWithPath) ? (
                    <ThumbnailImage photo={props.establishment.FileNameWithPath} />
                ) : (
                        <ThumbnailDocument file={props.establishment.FileNameWithPath} />
                    )}
            </div>
            <div className="col-lg-10 col-sm-12 m-0 p-1">
                <small className="mr-1">Activity Date: {new Date(props.establishment.EstbDate).toShortFormat()} ({moment(props.establishment.EstbDate).fromNow()})</small>
                <small className="mr-1 d-block float-right">Added By: {props.establishment.AuthorOrContributorName}</small>
                <br /><b>{props.establishment.EstbTitle.toUpperCase()}</b>
                <p>{props.establishment.EstbDescription}</p>
            </div>
        </div>
    );
}
