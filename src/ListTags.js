import { useState } from "react";

const ListTags = ({ arrTags }) => {
  const [isActive ,setIsActive] = useState(false)
    let number = isActive ? arrTags : arrTags.slice(0, 2)
    let text = isActive ? "TAGS" : "MORE"
  return (
    
<div className="list-tags">
    <button onClick={()=>setIsActive(!isActive)} className="list-tags-btn">{text}</button>
      {number.map((a) => (
        <div className="card-info-tag" key={a}>
          {a}
        </div>
      ))}
</div>
  );
};

export default ListTags;
