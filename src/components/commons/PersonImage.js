import React, { Fragment } from 'react';
import { API_URL } from '../../config';

export default function PersonImage({ usertype, id, height = "75px", width = "75px", photo_url }) {
    //console.log("photo url" + id, photo_url.length)
    return (
        <Fragment>
            {
                photo_url && photo_url.length === 0 ?
                    (<img className="img-fluid img-thumbnail rounded-circle p-0 m-1"
                        style={{ height: `${height}`, width: `${width}` }}
                        src={photo_url}
                        alt={id} />)
                    :
                    (<img className="img-fluid img-thumbnail  p-0 m-1"
                        style={{ height: `${height}`, width: `${width}` }}
                        src={`${API_URL}/user/photo/${usertype}/${id}/1`}
                        alt={id} />)
            }
        </Fragment>


    );
}
