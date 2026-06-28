const Player = ({ src, type }) => {

    switch (type) {
      case "youtube":
        return (
          <iframe
            src={`https://www.youtube.com/embed/${src}?autoplay=0`}
            width="100%"
            height="500"
            title="YouTube video player"
            style={{ border: "none" }}
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        );
      case "bil":
        return (
          <iframe
            src={`https://player.bilibili.com/player.html?isOutside=true&bvid=${src}&p=1&autoplay=0`}
            width="100%"
            height="500"
            border="0"
            frameborder="no"
            framespacing="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        );
      case "spotify-song":
        return (
          <iframe
            title="spotify-playlist"
            data-testid="embed-iframe"
            style={{ borderRadius: "12px" }}
            src={`https://open.spotify.com/embed/track/${src}?theme=0`}
            width="80%"
            height="152"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        );
        case "spotify-album":
        return (
          <iframe
            title="spotify-playlist"
            data-testid="embed-iframe"
            style={{ borderRadius: "12px" ,
              width:"80%",
            height:"352px"
            }}
            src={`https://open.spotify.com/embed/album/${src}?theme=0`}
            frameBorder="0"
            allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"
          ></iframe>
        );
      case "wyy":
        return (
          <iframe
            title="global-playlist"
            frameborder="no"
            border="0"
            marginwidth="0"
            marginheight="0"
            width="100%"
            height="470"
            src={src}
          ></iframe>
        );

      default:
        return (<iframe
            title="global-playlist"
            frameborder="no"
            border="0"
            marginwidth="0"
            marginheight="0"
            width="100%"
            height="470"
            src={src}
          ></iframe>)
    }
  };


export default Player;
