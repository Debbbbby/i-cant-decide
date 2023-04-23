import { Fragment, useState } from "react";
import Straw from "../../components/Straw";
import classes from "./DrawingStraws.module.scss";

function Straws() {
  const [optionList, setOptionList] = useState(["", ""]);
  const [drawing, setDrawing] = useState(false);
  const [result, setResult] = useState(null);
  const [drawingCountdown, setDrawingCountdown] = useState(5);
  const [handPickingPosition, setHandPickingPosition] = useState(0);

  const addOption = () => {
    if (optionList.length < 10) {
      setOptionList((prevList) => {
        return [...prevList, ""];
      });
    }
    setResult(null);
  };

  const deleteOption = (index) => {
    setOptionList((prevList) => {
      return [...prevList].filter((opt, i) => i !== index);
    });
    setResult(null);
  };

  const updateOption = (value, index) => {
    setOptionList((prevList) => {
      const newList = [...prevList];
      newList[index] = value;
      return newList;
    });
    setResult(null);
  };

  const start = () => {
    setResult(null);
    setDrawingCountdown(5);
    setDrawing(true);
    const randomInt = Math.floor(Math.random() * optionList.length);

    const countdownInterval = setInterval(() => {
      setDrawingCountdown((prevSec) => {
        const sec = prevSec - 1;
        return sec <= 0 ? 0 : sec;
      });
    }, 1000);

    const showResultTimer = setTimeout(() => {
      const resultOptionRect = document
        .getElementsByClassName("option" + randomInt)[0]
        .getBoundingClientRect();
      const pickingHandPos = resultOptionRect.top - 165 + window.pageYOffset; // 165 = height of hand-picking img against top of an option item
      setHandPickingPosition(pickingHandPos);
      setDrawing(false);
      setResult(randomInt);
      window.scrollTo(0, pickingHandPos);
      clearTimeout(showResultTimer);
      clearInterval(countdownInterval);
    }, 5000);
  };

  return (
    <Fragment>
      <p className={classes["max-hint"]}>You can add up to 10 options.</p>
      <div className={classes["list-wrapper"]}>
        {result !== null && (
          <img
            src="/assets/hand-picking.svg"
            alt="hand-picking"
            className={classes["hand-picking"]}
            style={{ top: handPickingPosition + "px" }}
          />
        )}
        {drawing && (
          <img
            src="/assets/hand-pointing.svg"
            alt="hand-pointing"
            className={`${classes["hand-pointing"]} `}
          />
        )}
        <ul className={classes["option-list"]}>
          {optionList.map((option, index) => (
            <Straw
              key={`option${index}`}
              index={index}
              option={option}
              result={result}
              delete={deleteOption.bind(null, index)}
              update={updateOption}
            />
          ))}
        </ul>
      </div>
      <div className={classes["btns-wrap"]}>
        <button
          type="button"
          className={classes["btn-add"]}
          onClick={addOption}
          disabled={optionList.length >= 10 || drawing}
        >
          <img
            src="/assets/plus.png"
            alt="plus-icon"
            className={classes["btn-icon"]}
          />
          Add
        </button>
        <button
          type="button"
          className={classes["btn-start"]}
          onClick={start}
          disabled={drawing}
        >
          <img
            src="/assets/start-arrow-pink.svg"
            alt="start-arrow"
            className={classes["btn-icon"]}
          />
          {drawing ? drawingCountdown : "Start!"}
        </button>
      </div>
    </Fragment>
  );
}

export default Straws;
