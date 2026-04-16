
const CardsList = ({music}) => {
    return ( 
        <div className="cards">
        {
            music.map(
                (card)=>(
                <div className="card">
                    <div className="card-info">
                    <img src={card.imgLink} className="card-info-img"/>
                    <div className="card-info-review">{card.review}</div>
                    <div className="card-info-date">{card.date}</div>
                    <div className="card-info-tags">{card.tags}</div>
                    </div>
                </div>
                )
            )}
        </div>
     );
}
 
export default CardsList;