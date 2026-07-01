import { useState } from "react";
const VideoChange = ({ videoType,bilSrc, youSrc }) => {
  const [iframeType, setIframeType] = useState("bil");

  function iframeChange(type) {
    setIframeType(type);
  }

  const iframeResult = () => {
    if(videoType === 'page'){
    if (iframeType === "bil") {
      return (
        <iframe
          src={`https://player.bilibili.com/player.html?isOutside=true&bvid=${bilSrc}&p=1&autoplay=0`}
          width="100%"
          height="500"
          border="0"
          frameborder="no"
          framespacing="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      );
    } else if (iframeType === "youtube") {
      return (
        <iframe
          src={`https://www.youtube.com/embed/${youSrc}?autoplay=0`}
          width="100%"
          height="500"
          title="YouTube video player"
          style={{ border: "none" }}
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      );
    } else {
      return <div>试试别的吧！</div>;
    }} else if (videoType === 'link'){
       if (iframeType === "bil") {
      return (
        <a href={`https://www.bilibili.com/video/${bilSrc}`}>bilibili 链接</a>
      );
    } else if (iframeType === "youtube") {
      return (
        <a href={`https://www.youtube.com/watch?v=${youSrc}`}>youtube 链接</a>
      );
    } else {
      return <div>试试别的吧！</div>;
    }
    }
  };
  return (
    <div className="video">
      <div className="video-btns">
        <button onClick={() => iframeChange("bil")}>B</button>
        <button onClick={() => iframeChange("youtube")}>Y</button>
      </div>
      <div className="video-iframe">{iframeResult()}</div>
    </div>
  );
};

export default VideoChange;
