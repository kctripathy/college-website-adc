import React from 'react';
import NoImage from '../../assets/images/160x90_NoImage.jpg';
import PDFImage from '../../assets/images/pdf_view_download.jpg';
import { WEB_URL } from '../../config';

export default function ThumbnailDocument({ file }) {
    return (
        <>
            {file.length === 0 ? (
                <img src={NoImage} className="img img-fluid img-thumbnail img-responsive d-block float-right" style={{ maxWidth: "100%", height: "auto" }} />
            ) : (
                    <a href={`${WEB_URL}/Documents/${file}`} alt="" target="_blank">
                        <img src={PDFImage} className="img img-fluid img-thumbnail img-responsive d-block float-right" />
                    </a>
                )}
        </>
    );
}
