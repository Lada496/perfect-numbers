import React, { Fragment, useRef, useState, useEffect } from "react";
import ResultComplete from "../components/ResultComplete";
import ResultUncomplete from "../components/ResultUncomplete";
import Game from "../modules/Game";

const GamePage: React.FC<{ title: string; game: Game }> = ({ title, game }) => {
  const [judge, setJudge] = useState<string>("try");
  const [showResult, setShowResult] = useState<boolean>(false);
  const [time, setTime] = useState<number>(0);
  const [isComplete, setIsComplete] = useState<boolean>(false);
  const userInputRef = useRef<HTMLTextAreaElement>(null);
  const [yourAnswers, setYourAnswers] = useState<string[]>([]);

  const countup = () => {
    setTime((time) => time + 0.5);
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const input = userInputRef.current!.value;
    if (game.anwers.includes(input) && !yourAnswers.includes(input)) {
      console.log("yes");
      setJudge("correct");
      setYourAnswers((prevArr) => [...prevArr, input]);
    } else {
      console.log("no");
      setJudge("wrong");
    }
    userInputRef.current!.value = "";
    setTimeout(() => {
      setJudge("try");
    }, 1500);
  };

  const giveupHandler = () => {
    setShowResult(true);
  };

  useEffect(() => {
    if (!showResult) {
      const timeId = setInterval(countup, 500);
      return () => {
        clearInterval(timeId);
      };
    }
  }, [showResult]);

  useEffect(() => {
    if (yourAnswers.length === game.anwers.length) {
      setIsComplete(true);
      setShowResult(true);
    }
  }, [yourAnswers, game.anwers]);

  const context: JSX.Element = (
    <Fragment>
      {judge === "correct" && (
        <p className="game__result" style={{ color: "#FFAC00" }}>
          correct!
        </p>
      )}
      {judge === "wrong" && (
        <p className="game__result" style={{ color: "#006BFF" }}>
          wrong...
        </p>
      )}
      <h1>{title}</h1>
      <div className="game">
        <p>
          {game.direction}
          {title === "Medium" && (
            <Fragment>
              <br />
              Contidion: 2<sup>p</sup> - 1 is a prime number
            </Fragment>
          )}
          {title === "Hard" && (
            <button className="game__oncemore">Once more!</button>
          )}
        </p>
        <form onSubmit={submitHandler}>
          <textarea ref={userInputRef} />
          <button type="submit" className="game__enter">
            Enter
          </button>
        </form>
        <button className="game__giveup" onClick={giveupHandler}>
          Give up
        </button>
      </div>
    </Fragment>
  );

  return (
    <Fragment>
      {!showResult && context}
      {showResult && isComplete && <ResultComplete time={time} />}
      {showResult && !isComplete && <ResultUncomplete result={yourAnswers} />}
    </Fragment>
  );
};

export default GamePage;
