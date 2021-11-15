import React from "react";
import { Link } from "react-router-dom";

const ResultUncomplete: React.FC<{ result: string[] }> = ({ result }) => {
  const score = result.length;
  return (
    <div className="result">
      <h2>You got...</h2>
      <p>
        {score} {`${result.length > 0 ? "points!" : "point"}`}
      </p>
      <Link to="/games">Back to Home</Link>
    </div>
  );
};

export default ResultUncomplete;
