import { Fragment, useState } from "react";
import Straw from "../../components/Straw";
import classes from "./DrawingStraws.module.scss";

function Straws() {
  const [optionList, setOptionList] = useState(["", ""]);
  const [drawing, setDrawing] = useState(false);
  const [result, setResult] = useState(null);
  const [drawingCountdown, setDrawingCountdown] = useState(5);

  const addOption = () => {
    if (optionList.length < 10) {
      setOptionList([...optionList, ""]);
    }
  };

  const deleteOption = (index) => {
    setOptionList([...optionList].filter((opt, i) => i !== index));
  };

  const updateOption = (value, index) => {
    const newList = [...optionList];
    newList[index] = value;
    setOptionList(newList);
  };

  const start = () => {
    setResult(null);
    setDrawingCountdown(5);
    setDrawing(true);
    const randomInt = Math.floor(Math.random() * optionList.length);

    const countdownInterval = setInterval(() => {
      setDrawingCountdown((prevSec) => {
        return prevSec - 1;
      });
    }, 1000);

    const showResultTimer = setTimeout(() => {
      const rect = document
        .getElementsByClassName("option" + randomInt)[0]
        .getBoundingClientRect();
      window.scrollTo(0, rect.top);
      setDrawing(false);
      setResult(randomInt);
      clearTimeout(showResultTimer);
      clearInterval(countdownInterval);
    }, 5000);
  };

  return (
    <Fragment>
      <p className={classes["max-hint"]}>You can add up to 10 options.</p>
      <ul className={classes["option-list"]}>
        {optionList.map((option, index) => (
          <Straw
            key={`option${index}`}
            index={index}
            option={option}
            drawing={drawing}
            result={result}
            delete={deleteOption.bind(null, index)}
            update={updateOption}
          />
        ))}
      </ul>
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
