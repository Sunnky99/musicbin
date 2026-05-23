

import ListDates from './ListDates';
import ListTags from './ListTags';


const Aside = ({arrDates, arrTags}) => {
    return ( 
        <aside>
                <h1 >Music-bin</h1>
                        <ListDates arrDates={arrDates}/>
                        <ListTags arrTags={arrTags}/>
            </aside>
     );
}
 
export default Aside;