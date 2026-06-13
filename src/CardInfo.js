import { useState } from "react";
import CardInfoIframe from "./CardInfoIframe";
import Markdown from "react-markdown";
const CardInfo = ({ card ,handleCardClick}) => {
  const [isChinese, setIsChinese] = useState(false);
  const [isClick, setIsClick] = useState(false);

  if (isClick) {
    return (
      <>
        {isChinese ? (
          <>
            <CardInfoIframe isChinese={isChinese} card={card} />
            <button
              className="card-play-btn"
              onClick={() => setIsClick(!isClick)}
            >
              ⏸︎
            </button>
            <button
              className="card-play-btn"
              onClick={() => setIsChinese(!isChinese)}
            >
              英{" "}
            </button>
          </>
        ) : (
          <>
            <CardInfoIframe isChinese={isChinese} card={card} />

            <button className="card-play-btn"
              onClick={() => setIsClick(!isClick)}
            >⏸︎</button>
            <button className="card-play-btn"
              onClick={() => setIsChinese(!isChinese)}
            >中</button>
          </>
        )}
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
        <p className="card-info-singer">{card.singer}</p>
      </div>
      <div className="card-info-date" onClick={()=>handleCardClick('date',(card.date))}>{card.date}</div>
      <div className="card-info-review"><Markdown>{card.review}</Markdown></div>
      <button className="card-play-btn" onClick={() => setIsClick(!isClick)}>
          ▶︎
        </button>
      <div className="card-info-tags">
        {card.tags?.map((tag) => (
          <div className="card-info-tag" key={tag} onClick={()=>handleCardClick('tag',tag)}>
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardInfo;
