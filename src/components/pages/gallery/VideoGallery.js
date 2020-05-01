import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Layout from "../Layout";
import ReactPlayer from "react-player";
import Loading from "../../commons/Loading";
import { EstbTypeCode } from "../../../constants/actionTypes";
import { fetchEstablishments } from "../../../actionMethods/estbActionMethods";

export default function VideoGallery() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.estb);
  //const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    debugger;
    if (!state.videos) {
      dispatch(fetchEstablishments());
    }
  }, []);

  const showVideoGallery = () => {
    return (
      state.videos &&
      state.videos.map((vdo, i) => {
        return (
          <div key={i} className="col-lg-4 col-sm-12 m-0 p-1 text-center">
            <div className="player-wrapper">
              <ReactPlayer
                className="react-player"
                url={vdo.EstbTitle}
                width="100%"
                height="100%"
                controls={true}
                onReady={() => setIsLoading(false)}
              />
              {/* <video loop muted autoPlay src={vdo.url} /> */}
            </div>
          </div>
        );
      })
    );
  };

  const showLoading = () => {
    if (isLoading) {
      return <Loading text="Loading videos..." />;
    }
  };
  return (
    <Layout title="Video Gallery">
      <div
        className="row m-0 p-0 text-center d-flex"
        style={{ overflow: "hidden" }}
      >
        {showLoading()}
        {showVideoGallery()}
      </div>
    </Layout>
  );
}
