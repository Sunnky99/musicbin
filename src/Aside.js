import useFetch from './useFetch'

import AsideDateList from "./AsideDateList";
import AsideTagList from "./AsideTagList";


const Aside = () => {
    const {data:music, isPending, error} = useFetch('music')
    return ( 
        <aside>
            <AsideDateList music={music}></AsideDateList>
            <AsideTagList music={music}></AsideTagList>
        </aside>
     );
}
 
export default Aside;