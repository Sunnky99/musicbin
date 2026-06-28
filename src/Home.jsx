
import useFetch from './useFetch';
import Container from './Container';

const Main = () => {
    const {data:music, isPending, error} = useFetch('music')
    return ( 
        <main>
            {error && <div>{error}</div>}
            {isPending && <div>连接中......</div>}
            {music &&<Container music={music} ></Container>}
        </main>
     );
}
 
export default Main;