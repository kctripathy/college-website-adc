import React from 'react';
import moment from 'moment';
import ThumbnailImage from '../../commons/ThumbnailImage';
import ThumbnailDocument from '../../commons/ThumbnailDocument';
import titleCase, { isAnImage } from '../../commons/CommonFunctions';

export default function ActivityContentRow(props) {
    //console.log("....props", props)
    const printDescription = (text) => (

        <div className="line-break">{text}</div>
        //<div>{text.replace('\n', '<br/>')}</div>
        // text.split("\n").map((i, key) => {
        //     return <p key={key}>{i}</p>;
        // })

    )
    return (
        <div className="row m-0 p-0 d-flex mb-2 mt-2" style={{ borderBottom: "double 3px #ccc" }}>
            <div className="col-lg-10 col-sm-12 m-0 p-1">
                <small className="mr-1">
                    Activity Date: &nbsp;
                {moment(props.establishment.EstbDate).format("DD MMM YYYY HH:MM")} &nbsp;
                ({moment(props.establishment.EstbDate).fromNow()})</small>

                <br /><b>{props.establishment.EstbTitle.toUpperCase()}</b>
                {printDescription(props.establishment.EstbDescription)}
                <small>Content Added By: {titleCase(props.establishment.AuthorOrContributorName)}</small>
            </div>
            <div className="col-lg-2 col-sm-12 m-0 p-1">
                {props.establishment.FileNameWithPath.length > 0 && isAnImage(props.establishment.FileNameWithPath) ? (
                    <ThumbnailImage photo={props.establishment.FileNameWithPath} />
                ) : (
                        props.establishment.FileNameWithPath.length === 0 ? ('') :
                            (<ThumbnailDocument file={props.establishment.FileNameWithPath} />)
                    )}
            </div>
        </div>
    );
}
