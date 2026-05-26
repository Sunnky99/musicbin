
import { useState } from 'react';

import Aside from './Aside';
import CardsList from './CardsList';
const Container = ({music}) => {
    const [arrCards, setArrCards] = useState(music)
  const [isChinese, setIsChinese] = useState(false);


    const arriteration = (arr) => [...new Set(arr)]

    //list date值
    const dates =  music.map(
        song =>{
            const songItem = (song.date).split('-')
            return songItem[0]
        }
    )
     const arrDates =  arriteration(dates)

    //list tags值
    const arrTags =  arriteration(music.reduce(
        ((acc,m) => acc.concat(m.tags)),[]
    ))


//tag和日期点击筛选，左card点击

    function handleCardClick(e){
        e.stopPropagation()
        if(e.target.className ==='card-info-date'){
            setArrCards(music.filter(
                song =>(
                    (song.date.split('-'))[0] === ((e.target.innerText).split('-'))[0])
                )
            )
        }else if(e.target.className ==='card-info-tag'){
            setArrCards(music.filter(
                song =>(
                    song.tags.find(s => s === e.target.innerText)
                )
            ))
        } else setArrCards(music)
    }

/*     function handleAsideClike(e){
         if(e.target.className ==='list-date-item'){
            setArrCards(music.filter(
                song =>(
                    (song.date.split('-'))[0] === (e.target.innerText)
                )
            ))
         }else setArrCards(music)
    } */


         function handleChangeChinese(){

            setIsChinese(prev => !prev)
            alert('PS.大陆加载完成需要等待一会')
         }

    return ( 
        <main onClick={handleCardClick}>
        <CardsList arrCards={arrCards} isChinese={isChinese} handleChangeChinese={handleChangeChinese} />
        <Aside arrDates={arrDates} arrTags={arrTags} isChinese={isChinese} handleChangeChinese={handleChangeChinese} />
       </main>
     );
}
 
export default Container;