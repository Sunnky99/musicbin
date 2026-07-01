const Img = ({src, alt=""}) => {
    return ( 
        <figure>
            <img src={src}/>
            <figcaption>{alt}</figcaption>
        </figure>
     );
}
 
export default Img;