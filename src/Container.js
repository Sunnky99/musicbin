
import { useState } from 'react';

import Aside from './Aside';
import CardsList from './CardsList';
const Container = ({music}) => {
    const [arrCards, setArrCards] = useState([...music].sort((a,b) => a.date > b.date ? -1 : 1))
    const arriteration = (arr) => [...new Set(arr)]
    let sortMusic

    //list date值
    const dates =  music.map(
        song =>{
            const songItem = (song.date).split('-')
            return songItem[0]
        }
    )

    //总的日期值，Aside-list-date，进行了new set筛选， 以及排序
     const arrDates =  [...arriteration(dates)].sort((a, b) => a - b)

    //总的tags值，Aside-list tags,进行了new set筛选， 以及排序
    const arrTags =  [...arriteration(music.reduce(
        ((acc,m) => acc.concat(m.tags)),[]
    ))].sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
    


//tag和日期点击筛选，左card点击

    function handleCardClick(e){
        e.stopPropagation()
        
        if(e.target.className ==='card-info-date'){
            sortMusic = music.filter(
                song =>(
                    (song.date.split('-'))[0] === ((e.target.innerText).split('-'))[0])
                )
            
        }else if(e.target.className ==='card-info-tag'){
            sortMusic = music.filter(
                song =>(
                    song.tags.find(s => s === e.target.innerText)
                )
            )
        } else sortMusic = music

        //设置了一个变量进行筛选赋值，最后再统一使用赋值好的数组变量进行排序setState
        
setArrCards([...sortMusic].sort((a,b) => a.date > b.date ? -1 : 1))
    }

function handleInput(inputText){
    if(inputText !== '' || inputText){
    sortMusic = music.filter(
        song => song.name.toLowerCase().includes(inputText.toLowerCase()) ||song.singer.toLowerCase().includes(inputText.toLowerCase()))
    }else sortMusic = music

setArrCards([...sortMusic].sort((a,b) => a.date > b.date ? -1 : 1))
}


    return ( 
        <main onClick={handleCardClick}>
            <CardsList arrCards={arrCards}  />
             <Aside arrDates={arrDates} arrTags={arrTags} handleInput={handleInput}/>
       </main>
     );
}
 
export default Container;