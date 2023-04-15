import { Fragment, useState } from "react";
import classes from "./CoinFlip.module.scss";

function CoinFlip() {
  const [flipping, setFlipping] = useState(false);
  const [result, setResult] = useState(null); // 0: tails, 1: heads
  const [showResult, setShowResult] = useState(false);

  const startFlipping = () => {
    getResult();
    setFlipping(true);
    setShowResult(false);
    const flippingTimer = setTimeout(() => {
      setFlipping(false);
      setShowResult(true);
      clearTimeout(flippingTimer);
    }, 1800);
  };

  const getResult = () => {
    const randomInt = Math.floor(Math.random() * 2);
    setResult(randomInt);
  };

  return (
    <Fragment>
      <div className={classes.container}>
        <div className={classes["flipping-view"]}>
          {!showResult && !flipping && (
            <img src="/assets/coin-flip.png" alt="coin-flip-start" />
          )}
          {!showResult && flipping && (
            <img
              src="/assets/coin-flip.gif"
              alt="coin-flipping"
              className={classes.flipping}
            />
          )}
          {showResult && result === 1 && (
            <img src="/assets/coin-heads.png" alt="coin-heads" />
          )}
          {showResult && result === 0 && (
            <img src="/assets/coin-tails.png" alt="coin-tails" />
          )}
        </div>
        {showResult && (
          <p className={classes["result-text"]}>
            {result === 1 ? "Heads!" : "Tails!"}
          </p>
        )}
        <button
          onClick={startFlipping}
          disabled={flipping}
          type="button"
          className={classes.button}
        >
          Start
        </button>
      </div>
    </Fragment>
  );
}

export default CoinFlip;
