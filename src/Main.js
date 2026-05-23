
import useFetch from './useFetch';
import Container from './Container';



const Main = () => {
    const {data:music, isPending, error} = useFetch('music')
        
    return ( 
        <>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {music &&<Container music={music} ></Container>}
        </>
     );
}
 
export default Main;