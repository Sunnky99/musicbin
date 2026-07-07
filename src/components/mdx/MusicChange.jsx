import { useState } from "react";
const MusicChange = ({
  musicType,
  imgLink,
  wyyLink,
  spoLink,
  authorLink,
  info = { title: "", overview: "" },
}) => {
  const [iframeType, setIframeType] = useState("");

  const infoIframe = (
    <div className="media-info">
      <div className="media-info-content">
        <h3>{info.title}</h3>
        <p>{info.overview}</p>
      </div>
      <img src={imgLink} />
    </div>
  );

  function iframeChange(type) {
    setIframeType(type);
  }

  const iframeResult = () => {
    switch (iframeType) {
      case "wyy":
        if (!wyyLink) return <p>这里是空的</p>;
        if (musicType === "song") {
          return (
            <iframe
              title="global-playlist"
              frameborder="no"
              border="0"
              marginwidth="0"
              marginheight="0"
              width="100%"
              height="86"
              src={wyyLink}
            ></iframe>
          );
        } else if (musicType === "album") {
          return (
            <iframe
              frameborder="no"
              border="0"
              marginwidth="0"
              marginheight="0"
              src={wyyLink}
              width="100%"
              height="470"
            ></iframe>
          );
        }
      case "spotify":
        if (!spoLink) return <p>这里是空的</p>;
        if (musicType === "song") {
          return (
            <iframe
              title="spotify-playlist"
              data-testid="embed-iframe"
              style={{ borderRadius: "12px" }}
              src={`https://open.spotify.com/embed/track/${spoLink}?theme=0`}
              width="80%"
              height="152"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          );
        } else if (musicType === "album") {
          return (
            <iframe
              title="spotify-playlist"
              data-testid="embed-iframe"
              style={{ borderRadius: "12px", width: "80%", height: "352px" }}
              src={`https://open.spotify.com/embed/album/${spoLink}?theme=0`}
              frameBorder="0"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          );
        }
      case "author":
        return authorLink ? (
          <a href={`${authorLink}`} target="_blank">
            原作者的bandcamp/网站等
          </a>
        ) : (
          <p>这里是空的</p>
        );
      case "info":
        return infoIframe;
      default:
        return infoIframe;
    }
  };

  return (
    <div className="media">
      <div className="media-btns">
        <button onClick={() => iframeChange("wyy")}>网易云</button>
        <button onClick={() => iframeChange("spotify")}>Spotify</button>
        <button onClick={() => iframeChange("author")}>原作者</button>
        <button onClick={() => iframeChange("info")}>◎</button>
      </div>
      <div className="media-iframe">{iframeResult()}</div>
    </div>
  );
};

export default MusicChange;
