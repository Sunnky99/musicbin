import { useState } from "react";
import { Link } from "react-router-dom";
import LocalPicGMain from "./LocalPicGMain";
const LocalPicGenerator = ({ music }) => {
  // 高亮标题字符串
  const [highlight, setHighlight] = useState("");
  const [chosenSong, setChosenSong] = useState("");

  // 日期字符串
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());

  // 颜色数组数字
  const [number, setNumber] = useState(1);

  // 初始化显示专辑数组
  const [musicResult, setMusicResult] = useState(
    [...music]
      .filter(
        (song) =>
          Number(song.date.split("-")[0]) === year &&
          month === Number(song.date.split("-")[1]),
      )
      .sort((a, b) => (a.date > b.date ? -1 : 1)),
  );

  // 提交年月后修改专辑数组，重新渲染页面
  function changeResult() {
    const result = [...music]
      .filter(
        (song) =>
          Number(song.date.split("-")[0]) === year &&
          month === Number(song.date.split("-")[1]),
      )
      .sort((a, b) => (a.date > b.date ? -1 : 1));
    setMusicResult(result);
    setChosenSong("");
    console.log(musicResult);
  }

  // 设置颜色数组变量，默认0元素是黑色，遍历之前的专辑数组得出颜色数组，组合两个数组
  let color = ["black"].concat(musicResult.map((song) => song.color));

  //  设置背景色变量
  let background = color[number];

  // 点击改变颜色，随机数索引
  function changeColor() {
    if (color.length === 0) return;
    setNumber(Math.floor(Math.random() * color.length));
  }

  // 点击卡片高亮标题背景，修改setHighlight字符串
  function handleHighlight(type, name) {
    if (type === "reset") {
      setHighlight("");
    } else if (type === "card") {
      setHighlight(name);
      setChosenSong(music.filter((card) => card.name === name));
      console.log(chosenSong);
    }
  }

  // form里的reset按钮，一键修改背景色，消除标题背景色
  function reset() {
    handleHighlight("reset");
    setNumber(0);
    setChosenSong("");
  }

  const show =
    musicResult.length != 0 ? (<LocalPicGMain musicResult={musicResult} handleHighlight={handleHighlight} highlight={highlight} chosenSong={chosenSong}/>): (
      <>什么都没有，试试别的年月吧：）</>
    );

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

        <button style={{ borderRadius: "50%" }}>
          <Link to={"/"}>HOME</Link>
        </button>
      </div>
      <main style={{ backgroundColor: `${background}` }} className="lm-main">
        {show}

      </main>
    </>
  );
};

export default LocalPicGenerator;
