const ListDates = ({arrDates, handleCardClick}) => {
    return ( 
    <div className="list list-date">
        {arrDates.map(
            date => (
                <div className="card-info-date" key={date} onClick={()=>handleCardClick('date',date)}>
                    {date}
                </div>
            )
        )}
    </div>
    );
}
 
export default ListDates;