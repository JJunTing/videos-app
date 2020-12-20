import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";

const App = () => {
  const [seletedVideo, setSeletedVideo] = useState(null);
  const [videos, search] = useVideos("dogs");

  useEffect(() => {
    setSeletedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="ui container" style={{ marginTop: "20px" }}>
      <SearchBar onFormSubmit={search} />
      {videos.length} videos
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={seletedVideo} />
          </div>
          <div className="five wide column">
            <VideoList onVideoSelect={setSeletedVideo} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
