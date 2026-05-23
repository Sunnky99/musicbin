import { useState } from "react";

const CardInfo = ({ card }) => {
  const [isClick, setIsClick] = useState(false);
  const src = "https://open.spotify.com/embed/album/"+card.playId+"?utm_source=generator"
  if (isClick) {
    return (
      <>
        <iframe
          data-testid="embed-iframe"
          style={{ borderRadius: "12px" }}
          src={src}
          width="100%"
          height="490"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
        <button className="card-play-btn" onClick={() => setIsClick(!isClick)}>⏸︎</button>
      </>
    );
  }
  return (
    <div className="card-info">
      <div className="card-info-img" style={{ backgroundColor: card.color }}>
        <img src={card.imgLink} className="card-info-img-src" alt={card.name} />
      </div>
      <h3 className="card-info-title">{card.name}</h3>
      <div className="card-info-date">{card.date}</div>
      <div className="card-info-review">{card.review}</div>
      
      <button className="card-play-btn" onClick={() => setIsClick(!isClick)}>▶︎</button>
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
