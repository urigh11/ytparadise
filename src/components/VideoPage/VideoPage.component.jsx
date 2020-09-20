import React from "react";

import {
  VideoUnit,
  VideoUnitTitle,
  VideoContainer,
  VideoAndAds,
  AdVertical,
} from "./VideoPage.style";
import { videoLinks } from "../Main/videoLinksArray";

const VideoPage = ({ match }) => {
  const {
    params: { videoId },
  } = match;
  const { title, link } = videoLinks[videoId - 1];

  return (
    <VideoUnit>
      <VideoUnitTitle>{title}</VideoUnitTitle>
      <VideoAndAds>
        {/* <AdVertical> */}
        {/* <iframe
            title="mobile_banner"
            src="https://www.topdisplaynetwork.com/watchnew?key=734d720ceeb2a4a805c6b53217d94b7f"
            width="160"
            height="600"
            frameborder="0"
            scrolling="no"
          ></iframe> */}
        {/* </AdVertical> */}
        <VideoContainer>
          <iframe
            title={videoId}
            src={link}
            frameBorder={0}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </VideoContainer>
        <AdVertical>
          <iframe
            title="mobile_banner"
            src="https://www.topdisplaynetwork.com/watchnew?key=734d720ceeb2a4a805c6b53217d94b7f"
            width="160"
            height="600"
            frameborder="0"
            scrolling="no"
          ></iframe>
        </AdVertical>
      </VideoAndAds>
    </VideoUnit>
  );
};

export default VideoPage;