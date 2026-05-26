import { useState } from "react";

const CardInfo = ({ card, isChinese}) => {
  const [isClick, setIsClick] = useState(false);
  const playURL = card.playURL
  const playURLChs = card.playURLChs
 const currentURL = isChinese ? playURLChs : playURL
 const play = ()=> {
  if(isChinese){
  if(!playURLChs)return "抱歉我们无法进入中国大陆"
  return "播放源加载失败";
 }else {
  if(!playURL)return "sorry we have red passport"
  return "Failed to load playlist.";
 }
}
  if (isClick) {
    return (

      <>{currentURL ?((isChinese )?(
       <iframe title="global-playlist" frameborder="no" border="0" marginwidth="0" marginheight="0" width="100%" height="450" src={currentURL}></iframe>):(
        <iframe
        title="spotify-playlist"
          data-testid="embed-iframe"
          style={{ borderRadius: "12px" }}
          src={currentURL}
          width="100%"
          height="490"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>) ) : (<p>{play()}</p>)}
        <button className="card-play-btn" onClick={() => setIsClick(!isClick)}>⏸︎</button>
      </>
    )
  }
  return (
    <div className="card-info">
      <div className="card-info-img" style={{ backgroundColor: card.color }}>
        <img src={card.imgLink} className="card-info-img-src" alt={card.name} />
      </div>

    <div className="card-info-titles">
        <h3 className="card-info-title">{card.name}</h3>
        <button className="card-play-btn" onClick={() => setIsClick(!isClick)}>▶︎</button>
    </div>
      <div className="card-info-date">{card.date}</div>
      <div className="card-info-review">{card.review}</div>
      
      <div className="card-info-tags">
        {card.tags.map((tag) => (
          <div className="card-info-tag" key={tag}>
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardInfo;
