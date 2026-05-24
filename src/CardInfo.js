import { useState } from "react";

const CardInfo = ({ card }) => {
  const [isClick, setIsClick] = useState(false);
  const src = `${card.playId}`
  if (isClick) {
    return (
      <>
        <iframe
        title="spotify-playlist"
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
