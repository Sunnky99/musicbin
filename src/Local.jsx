
import useFetch from './useFetch';
import LocalPicGenerator from './LocalPicGenerator'

const Local = () => {
    const {data:music, isPending, error} = useFetch('music')

    return ( 
        <>
            {error && <div>{error}</div>}
            {isPending && <div >连接中......</div>}
            {music &&<LocalPicGenerator music={music} ></LocalPicGenerator>}
        </>
     );
}
 
export default Local;