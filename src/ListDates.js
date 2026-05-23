const ListDates = ({arrDates}) => {
    return ( 
    <div className="list-date">
        {arrDates.map(
            a => (
                <div className="card-info-date" key={a}>
                    {a}
                </div>
            )
        )}
    </div>
    );
}
 
export default ListDates;