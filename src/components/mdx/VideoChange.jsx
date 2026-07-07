import { useState } from "react";
const VideoChange = ({ imgLink,bilLink, youLink,authorLink,info={title:"",overview:""}}) => {
  const [iframeType, setIframeType] = useState("");

 const infoIframe =   (
      <div className="media-info">
        <div className="media-info-content">
      <h3>{info.title}</h3>
      <p>{info.overview}</p></div>
            <img src={imgLink}/>
        </div>);
  
  function iframeChange(type) {
    //设置引入类型
    setIframeType(type);
  }

  const iframeResult = () => {
    switch (iframeType) {
      case "bil":
        if(!bilLink)return(<p>这里是空的</p>)
        return (<iframe
          src={`https://player.bilibili.com/player.html?isOutside=true&bvid=${bilLink}&p=1&autoplay=0`}
          width="100%"
           height="400"
          border="0"
          frameborder="no"
          framespacing="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>)
        ;
      case "youtube":
        if(!youLink)return(<p>这里是空的</p>)
          return (<iframe
          src={`https://www.youtube.com/embed/${youLink}?privacy=1&modestbranding=1&controls=1&rel=0&autoplay=0`}
          width="100%"
           height="400"
          title="YouTube video player"
          style={{ border: "none" }}
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>)
      case "author":
        return authorLink?(<a href={`${authorLink}`}target="_blank">原作者的bandcamp/网站等</a>):(<p>这里是空的</p>);
      case "info":
        return infoIframe;
      default:
        return infoIframe;
    }
  };

  return (
    <div className="media">
      <div className="media-btns">
        <button onClick={() => iframeChange("bil")}>bilibili</button>
        <button onClick={() => iframeChange("youtube")}>youtube</button>
        <button onClick={() => iframeChange("author")}>原作者</button>
        <button onClick={() => iframeChange("info")}>◎</button>
      </div>
      <div className="media-iframe">{iframeResult()}</div>
    </div>
  );
};

export default VideoChange;
