import Link from "next/link";
import classes from "./MainNavigation.module.scss";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link href="/" className={classes[`logo-link`]}>
        <img
          src="/assets/mind-blowing.png"
          alt="logo"
          className={classes.logo}
        />
      </Link>
      <Link href="/">
        <h3>I can't decide.</h3>
      </Link>
    </header>
  );
}

export default MainNavigation;
