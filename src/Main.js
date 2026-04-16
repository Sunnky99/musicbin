
import useFetch from './useFetch'
import Container from './Container';
import Aside from './Aside';

const Main = () => {
    const {data:music, isPending, error} = useFetch('music')
    return ( 
        <main>
            {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
            {music &&<Container music={music}></Container>}
            {music &&<Aside music={music}></Aside>}
        </main>
     );
}
 
export default Main;