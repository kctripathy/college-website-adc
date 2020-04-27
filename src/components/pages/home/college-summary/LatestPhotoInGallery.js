import React from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { WEB_URL } from "../../../../config";
import { Link } from "react-router-dom";

export default function LatestPhotoInGallery() {
  const state = useSelector((state) => state.estb);

  const showLatestMedia = () => {
    if (state.loading === false && state.latest_image) {
      return (
        <>
          <Link to="/gallery/photo">
            {/* <a href={`${WEB_URL}/Documents/${state.latest_image.FileNameWithPath}`} target="_blank"> */}
            <div className="col-12 p-1 m-0 text-center text-dark bg-light border border-rounded">
              <b>Latest in Photo Gallery</b>
              <br />
              <small className="text-dark">
                {moment(state.latest_image.EstbDate).format(
                  "DD MMM YYYY HH:MM"
                )}
                <em> ({moment(state.latest_image.EstbDate).fromNow()}</em>)
              </small>
            </div>
            <div
              className="col-12 p-0 m-0"
              style={{ maxHeight: "250px", overflow: "hidden" }}
            >
              <img
                src={`${WEB_URL}/Documents/${state.latest_image.FileNameWithPath}`}
                className="img img-responsive w-100"
                alt=""
              />
            </div>
          </Link>
          {/* </a> */}
        </>
      );
    } else {
      return (
        <div className="col-12 p-2 m-0 text-center text-dark mb-1 bg-warning">
          <p>...</p>
        </div>
      );
    }
  };

  return <div className="row m-0 p-0 mt-2 mb-4">{showLatestMedia()}</div>;
}
