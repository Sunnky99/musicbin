import ListDates from "./ListDates";
import ListTags from "./ListTags";
import Search from "./Search";
import useWindowSize from './useWindowSize';

import { useState } from "react";

import { Link } from "react-router-dom";
const Aside = ({ arrDates, arrTags ,handleInput,  handleCardClick}) => {

const [isActive, setIsActive] = useState(false);
const {width} = useWindowSize();

  if (width < 615) {
    return (
      <aside>
        <h1 onClick={() => setIsActive(!isActive)}>Music-bin</h1>
        {isActive ? (
          <>
            <ListDates arrDates={arrDates}  handleCardClick={handleCardClick}/>
            <ListTags arrTags={arrTags}  handleCardClick={handleCardClick}/>
            <button><Link to={"/others"}>Others</Link></button>
            <p
              style={{
                backgroundColor: "#ffffff00",
                border: "1px solid black",
                padding: "5px",
              }}
            >
              ⛏︎表单施工中...
            </p>
          </>
        ) : (
          <></>
        )}
      </aside>
    );
  }

  return (
    <aside>
      <h1>Music-bin</h1>      
      <Search handleInput={handleInput}/>
      <ListDates arrDates={arrDates} handleCardClick={handleCardClick} />
      <ListTags arrTags={arrTags}  handleCardClick={handleCardClick}/>
       <button><Link to={"/others"}>Others</Link></button>
      <p
        style={{
          backgroundColor: "white",
          border: "1px solid black",
          padding: "5px",
        }}
      >
        ⛏︎表单施工中...
      </p>
    </aside>
  );
};

export default Aside;
