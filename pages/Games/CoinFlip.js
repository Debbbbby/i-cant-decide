import { Fragment, useState } from "react";
import classes from "./CoinFlip.module.scss";

function CoinFlip() {
  const [flipping, setFlipping] = useState(false);
  const [result, setResult] = useState(null); // 0: tails, 1: heads

  const startFlipping = () => {
    setResult(null);
    setFlipping(true);
    const flippingTimer = setTimeout(() => {
      const randomInt = Math.floor(Math.random() * 2);
      setResult(randomInt);
      setFlipping(false);
      clearTimeout(flippingTimer);
    }, 1800);
  };

  return (
    <Fragment>
      <div className={classes.container}>
        <div className={classes["flipping-view"]}>
          {result === null && !flipping && (
            <img src="/assets/coin-flip.png" alt="coin-flip-start" />
          )}
          {result === null && flipping && (
            <img
              src="/assets/coin-flip.gif"
              alt="coin-flipping"
              className={classes.flipping}
            />
          )}
          {result === 1 && (
            <img src="/assets/coin-heads.png" alt="coin-heads" />
          )}
          {result === 0 && (
            <img src="/assets/coin-tails.png" alt="coin-tails" />
          )}
        </div>
        {result !== null && (
          <p className={classes["result-text"]}>
            {result === 1 ? "Heads!" : "Tails!"}
          </p>
        )}
        <button
          onClick={startFlipping}
          disabled={flipping}
          type="button"
          className={`${classes.button} ${flipping ? classes.disabled : ""}`}
        >
          Start
        </button>
      </div>
    </Fragment>
  );
}

export default CoinFlip;
