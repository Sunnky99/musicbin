
const Search = ({handleInput}) => {
    return ( 
        <>
        <input type="text" onChange={
            (e)=>{
                const value = e.target.value
                handleInput(value)
                }}/>
        </>
     );
}
 
export default Search;