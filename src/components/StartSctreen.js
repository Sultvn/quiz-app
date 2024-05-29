import React from "react";

const StartSctreen = ({ numQuestions, dispatch }) => {
  return (
    <div className="start">
      <h2>Welcome to React Quiz</h2>
      <h3>{numQuestions} questions to your React Mastery</h3>
      <button
        onClick={() => dispatch({ type: "start" })}
        className="btn btn-ui"
      >
        Start
      </button>
    </div>
  );
};

export default StartSctreen;
