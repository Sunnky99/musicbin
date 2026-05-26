import CardInfo from "./CardInfo";

const CardsList = ({ arrCards, isChinese ,handleChangeChinese}) => {



  return (
    <div className="container">
      <div className="cards">
        {arrCards.map((card) => (
          <div className="card" key={card.id} >
            <CardInfo card={card} isChinese={isChinese} handleChangeChinese={handleChangeChinese} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsList;
