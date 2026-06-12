
const Search = ({handleInput}) => {
    return ( 
        <>
        <input type="text" name="text" placeholder="输入关键词搜索..." onChange={
            (e)=>{
                const value = e.target.value
                handleInput(value)
                }}/>
        </>
     );
}
 
export default Search;