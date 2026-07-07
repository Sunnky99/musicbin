import { useState } from "react";
import useWindowSize from "./useWindowSize";

const ListTags = ({ arrTags, handleCardClick }) => {
  const [isActive ,setIsActive] = useState(false)
  const { width } = useWindowSize();
  let number = isActive ? arrTags : arrTags.slice(0, 3)
  let text = isActive ? "TAGS" : "MORE"
  
  if (width < 1300) {
  return (
    
<div className="list list-tags">
    <button onClick={()=>setIsActive(!isActive)} className="list-tags-btn">{text}</button>
      {number.map((tag) => (
        <div className="card-info-tag" key={tag} onClick={()=>handleCardClick('tag',tag)}>
          {tag}
        </div>
      ))}
</div>
  )}

  return (<div className="list list-tags">
    <button className="list-tags-btn">TAGS</button>
      {arrTags.map((tag) => (
        <div className="card-info-tag" key={tag} onClick={()=>handleCardClick('tag',tag)}>
          {tag}
        </div>
      ))}
</div>)
};

export default ListTags;
