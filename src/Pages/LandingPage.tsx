import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

import GamePage from "./GamePage";
import Navigation from "../components/Navigation";

import Nav from "../modules/Nav";
import Game from "../modules/Game";

import { default as perfectNumbers } from "../data/perfect-numbers.json";

const LandingPage = () => {
  const easy = new Nav("easy", "Easy");
  const medium = new Nav("medium", "Medium");
  const navs = [easy, medium];

  const answersEasy = perfectNumbers
    .filter((item) => item.id < 26)
    .map((item) => item.number);
  const answersMedium = perfectNumbers.map((item) => item.p.toString());

  const gameEasy = new Game(
    answersEasy,
    "Enter first 25 perfect numbers one by one"
  );

  const gameMedium = new Game(
    answersMedium,
    "Enter 51 positive integers　p which meets the following condition one by one."
  );

  return (
    <Fragment>
      <Routes>
        <Route
          path="/"
          element={
            <Fragment>
              <h1>Perfect Numbers</h1>
              <Navigation navs={navs} />
            </Fragment>
          }
        />
        <Route
          path="easy/*"
          element={<GamePage title="Easy" game={gameEasy} />}
        />
        <Route
          path="medium/*"
          element={<GamePage title="Medium" game={gameMedium} />}
        />
      </Routes>
    </Fragment>
  );
};

export default LandingPage;
