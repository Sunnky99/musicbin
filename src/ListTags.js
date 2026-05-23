import { useState } from "react";

const ListTags = ({ arrTags }) => {
  const [isActive ,setIsActive] = useState(false)
    let number = isActive ? arrTags : arrTags.slice(0, 2)
    let text = isActive ? "all" : "more"
  return (
    
<div className="list-tags">
      {number.map((a) => (
        <div className="card-info-tag" key={a}>
          {a}
        </div>
      ))}
    <button onClick={()=>setIsActive(!isActive)} className="list-tags-btn">{text}</button>
</div>
  );
};

export default ListTags;
