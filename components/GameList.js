import Link from "next/link";
import classes from "./GameList.module.scss";

function GameList() {
  return (
    <ul className={classes["game-list"]}>
      <li id="flip-coin" className={classes.game}>
        <h4 className={classes[`game-title`]}>Flip for it!</h4>
        <Link href="/Games/CoinFlip">
          <img src="/assets/coin-flip-cover.gif" alt="coin-flip" />
        </Link>
      </li>
      <li id="draw-lots" className={classes.game}>
        <h4 className={classes[`game-title`]}>Draw straws!</h4>
        <Link href="/Games/DrawingStraws">
          <img src="/assets/draw-straws-cover.gif" alt="draw-straws" />
        </Link>
      </li>
    </ul>
  );
}

export default GameList;
