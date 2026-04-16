import useFetch from './useFetch'

import CardsList from './CardsList';

const Container = () => {
const {data:music, isPending, error} = useFetch('music')
    return ( 
        <div className="container">
            {music &&<CardsList music={music}></CardsList>}
        </div>
     );
}
 
export default Container;