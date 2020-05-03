import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Layout from "../Layout";
//import ReactPlayer from "react-player";
import VideoCard from "./VideoCard";
import Loading from "../../commons/Loading";
import { EstbTypeCode } from "../../../constants/actionTypes";
import { fetchEstablishments } from "../../../actionMethods/estbActionMethods";

export default function VideoGallery() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.estb);
  //const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //debugger;
    if (!state.videos) {
      dispatch(fetchEstablishments());
    }
  }, []);

  const showVideoGallery = () => {
    //setIsLoading(false);
    return (
      state.videos &&
      state.videos.map((vdo, i) => {
        return <VideoCard key={i} video={vdo} />;
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
        {/* {showLoading()} */}
        {showVideoGallery()}
      </div>
    </Layout>
  );
}
