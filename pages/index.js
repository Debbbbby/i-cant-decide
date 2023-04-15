import Head from "next/head";
import { Fragment } from "react";
import GameList from "../components/GameList";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>I Can't Decide.</title>
        <meta
          name="description"
          content="Can't decide what to have for lunch? Can't decide where to go this weekend? There are just too many wonderful things in the world yet we can only choose one at a time, which is freaking difficult! Just use these little games/tools as your decision-maker and brain-saver."
        />
      </Head>
      <GameList />
    </Fragment>
  );
}
