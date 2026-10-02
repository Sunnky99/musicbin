import { useState } from "react";
const LocalPicGenerator = ({ music }) => {
  const today = new Date();
  const [highlight, setHighlight] = useState("");
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());
   const [number, setNumber] = useState(1);




  const [musicResult, setMusicResult] = useState(
    [...music]
      .filter(
        (song) =>
          Number(song.date.split("-")[0]) === year &&
          month === Number(song.date.split("-")[1]),
      )
      .sort((a, b) => (a.date > b.date ? -1 : 1)),
  );

  function changeResult() {

    const result = [...music]
      .filter(
        (song) =>
          Number(song.date.split("-")[0]) === year &&
          month === Number(song.date.split("-")[1]),
      )
      .sort((a, b) => (a.date > b.date ? -1 : 1));
    setMusicResult(result);
  }

   let color = ["black"].concat(musicResult.map((song) => song.color));
  let background = color[number];

  function changeColor() {
    if (color.length === 0) return;
    setNumber(Math.floor(Math.random() * color.length));
  }

  function handleHighlight(type, name) {
    if (type === "reset") {
      setHighlight("");
    } else if (type === "card") {
      setHighlight(name);
    }
  }

  function reset() {
    handleHighlight("reset");
    setNumber(0);
  }

  const show = (musicResult!=[]) ? (
        <div className="lm-container">
          <div className="lm-cards">
            {musicResult.map((card) => (
              <div
                className="lm-card"
                key={card.id}
                title={card.name}
                onClick={() => handleHighlight("card", card.name)}
              >
                <img
                  src={card.imgLink}
                  className="lm-card-info-img-src"
                  alt={card.name}
                />
              </div>
            ))}
          </div>
          <div className="lm-titles">
            <ul>
              {musicResult.map((card) => {
                if (card.name === highlight) {
                  return (
                    <li
                      key={card.id}
                      title={card.review}
                      style={{
                        backgroundColor: `${card.color}`,
                        textShadow: "1px 1px 1px #1f1f1f",
                      }}
                    >
                      {card.name}
                    </li>
                  );
                } else {
                  return (
                    <li key={card.id} title={card.review}>
                      {card.name}
                    </li>
                  );
                }
              })}
            </ul>
          </div>
        </div>
  ) : (
    <>
    什么都没有
    </>
  )

  return (
    <>
      <div className="lm-form">
        <label>
          月份：
          <input
            type="text"
            defaultValue={month}
            onChange={(e) => setMonth(Number(e.target.value))}
          />
        </label>
        <label>
          年份：
          <input
            type="text"
            defaultValue={year}
            onChange={(e) => setYear(Number(e.target.value))}
          />
        </label>
        <button onClick={changeResult}>SUBMIT</button>
        <button
          onClick={changeColor}
          style={{ backgroundColor: `${background}`, color: `white` }}
        >
          COLOR
        </button>
        <button
          onClick={reset}
          style={{ backgroundColor: `black`, color: `white` }}
        >
          RESET
        </button>
      </div>
      <main style={{ backgroundColor: `${background}` }} className="lm-main">
{show}
      </main>
    </>
  );
};

export default LocalPicGenerator;
