import CardInfo from "./CardInfo";
import useWindowSize from "./useWindowSize";

const LocalPicGMain = ({
  musicResult,
  handleHighlight,
  highlight,
  chosenSong,
}) => {
  const { width } = useWindowSize();
  const cardHighlight = (card, show) => {
    if (card.name === highlight && show === true) {
      return (
        <div>
        <li
          key={card.id}
          title={card.review}
          style={{
            backgroundColor: `${card.color}`,
            textShadow: "1px 1px 1px #1f1f1f",
          }}
        >
        
          {card.name}</li>
          {chosenSong ? (
          <div
            className="card"
            style={{
              backgroundColor: `${chosenSong[0].color}`,
              animation: "none",
            }}
          >
            <CardInfo card={chosenSong[0]} />
          </div>
        ) : (
          <></>
        )}</div>
        
      );
    } else if(card.name === highlight && show === false) {
      return (
        <li
          key={card.id}
          title={card.review}
          style={{
            backgroundColor: `${card.color}`,
            textShadow: "1px 1px 1px #1f1f1f",
          }}
        >
          {card.name}
        </li>
        
      );
    } 
    return (
      <li key={card.id} title={card.review}>
        {card.name}
      </li>
    );
  };

  if (width < 615) {
    return (
      <>
        <div className="lm-container">
          <div className="lm-cards">
            {musicResult.map((card) => (
              <div
                className="lm-card"
                key={card.id}
                title={card.name}
                onClick={() => handleHighlight("card", card.name)}
              >
                <img
                  src={card.imgLink}
                  className="lm-card-info-img-src"
                  alt={card.name}
                />
              </div>
            ))}
          </div>
           <div className="lm-titles">
        <ul>{musicResult.map((card) => cardHighlight(card, true))}

            
        </ul>
        
      </div>
        </div>
      </>
    );
  }
  return (
    <div className="lm-container">
      <div className="lm-cards">
        {musicResult.map((card) => (
          <div
            className="lm-card"
            key={card.id}
            title={card.name}
            onClick={() => handleHighlight("card", card.name)}
          >
            <img
              src={card.imgLink}
              className="lm-card-info-img-src"
              alt={card.name}
            />
          </div>
        ))}
      </div>
      <div className="lm-titles">
        <ul>{musicResult.map((card) => cardHighlight(card, false))}
{chosenSong ? (
          <div
            className="card"
            style={{
              backgroundColor: `${chosenSong[0].color}`,
              animation: "none",
            }}
          >
            <CardInfo card={chosenSong[0]} />
          </div>
        ) : (
          <></>
        )}

        </ul>
        
      </div>
    </div>
  );
};

export default LocalPicGMain;
