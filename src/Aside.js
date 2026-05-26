

import ListDates from './ListDates';
import ListTags from './ListTags';


const Aside = ({arrDates, arrTags, handleChangeChinese, isChinese, play}) => {
    return ( 
        <aside>
                <h1 >Music-bin</h1>
                <ListDates arrDates={arrDates}/>
                <ListTags arrTags={arrTags}/>
                <button onClick={()=>handleChangeChinese(play) }>{isChinese ?"✈︎全球音乐软件" : "☯大陆音乐软件"}</button>
                
            </aside>
     );
}
 
export default Aside;