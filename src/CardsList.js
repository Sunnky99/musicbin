import CardInfo from "./CardInfo";

const CardsList = ({ arrCards }) => {



  return (
    <div className="container">
      <div className="cards">
        {arrCards.map((card) => (
          <div className="card" key={card.id} >
            <CardInfo card={card}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsList;
