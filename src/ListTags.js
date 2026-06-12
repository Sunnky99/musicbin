import { useState } from "react";

const ListTags = ({ arrTags, handleCardClick }) => {
  const [isActive ,setIsActive] = useState(false)
    let number = isActive ? arrTags : arrTags.slice(0, 3)
    let text = isActive ? "TAGS" : "MORE"
  return (
    
<div className="list list-tags">
    <button onClick={()=>setIsActive(!isActive)} className="list-tags-btn">{text}</button>
      {number.map((tag) => (
        <div className="card-info-tag" key={tag} onClick={()=>handleCardClick('tag',tag)}>
          {tag}
        </div>
      ))}
</div>
  );
};

export default ListTags;
