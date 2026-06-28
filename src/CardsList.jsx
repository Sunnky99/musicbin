import { useRef } from "react";
import CardInfo from "./CardInfo";

import useWindowSize from "./useWindowSize";
const CardsList = ({
  arrCards,
  isChinese,
  handleChangeChinese,
  handleCardClick,
}) => {
  const containerRef = useRef(null);

  const scrollToElement = () => containerRef.current.scrollIntoView();

  const { width } = useWindowSize();
  if (width < 615) {
    return (
      <div className="container">
        <div className="cards">
          <div className="invisible" ref={containerRef}></div>
          {arrCards.map((card) => (
            <div className="card" key={card.id}>
              <CardInfo
                card={card}
                isChinese={isChinese}
                handleChangeChinese={handleChangeChinese}
                handleCardClick={handleCardClick}
              />
            </div>
          ))}
        </div>
        <div className="buttons">
          <button className="top-btn" onClick={scrollToElement}>
            上
          </button>
          <button className="all-btn" onClick={() => handleCardClick("all")}>
            ALL
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="container">
      <div className="cards">
        <div className="invisible" ref={containerRef}></div>
        {arrCards.map((card) => (
          <div className="card" key={card.id}>
            <CardInfo
              card={card}
              isChinese={isChinese}
              handleChangeChinese={handleChangeChinese}
              handleCardClick={handleCardClick}
            />
          </div>
        ))}
      </div>
      <div className="buttons">
        <button className="top-btn" onClick={scrollToElement}>
          上
        </button>

        <div className="all-btn" onClick={() => handleCardClick("all")}>
          ALL
        </div>
      </div>
    </div>
  );
};

export default CardsList;
