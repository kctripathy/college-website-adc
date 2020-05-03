import React from "react";
import { useState } from "react";
import ReactPlayer from "react-player";
import Spinner from "../../commons/Spinner";

export default function VideoCard(props) {
  const [isloading, setIsLoading] = useState(true);

  return (
    <div className="col-lg-4 col-sm-12 m-0 p-1 text-center">
      <div className="player-wrapper">
        {isloading && (
          <div className="alert alert-primary">
            <Spinner></Spinner>Loading video...
          </div>
        )}
        <ReactPlayer
          className="react-player"
          url={props.video.EstbTitle}
          width="100%"
          height="100%"
          controls={true}
          onReady={() => setIsLoading(false)}
        />
      </div>
    </div>
  );
}
