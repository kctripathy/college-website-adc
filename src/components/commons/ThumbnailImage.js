import React from 'react';
import NoImage from '../../assets/images/160x90_NoImage.jpg';
import { WEB_URL } from '../../config';

export default function ThumbnailImage({ photo }) {
    return (
        <>
            {photo.length === 0 ? (
                <img src={NoImage} className="img img-fluid d-block float-right" />
            ) : (
                    <a href={`${WEB_URL}/Documents/${photo}`} alt="" target="_blank">
                        <img src={`${WEB_URL}/Documents/${photo}`} className="img img-fluid img-thumbnail img-responsive" style={{ maxWidth: "100%", height: "auto" }} />
                    </a>
                )}
        </>
    );
}
