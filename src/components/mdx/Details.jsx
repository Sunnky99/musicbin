const Details = ({title, children}) => {
    return ( 
        <details className="post-details">
            <summary className="post-details-summary">{title}</summary>
            <div className="post-details-content">
                {children}
            </div>
        </details>
     );
}
 
export default Details;