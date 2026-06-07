import CardInfo from "./CardInfo";

import useWindowSize from './useWindowSize';
const CardsList = ({ arrCards, isChinese ,handleChangeChinese}) => {

function handleTop(){
  window.scrollTo(0,0) 
}

const {width} = useWindowSize();
if(width<615){
  return (
    <div className="container">
      <div className="cards">
        {arrCards.map((card) => (
          <div className="card" key={card.id} >
            <CardInfo card={card} isChinese={isChinese} handleChangeChinese={handleChangeChinese} />
          </div>
        ))}
      </div>
      <button className="to-top" onClick={handleTop}>上</button>
    </div>
  );
}
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
