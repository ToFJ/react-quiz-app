const Leaderboard = () => {
  const score = localStorage.getItem("score");
  const all = localStorage.getItem("all");

  return (
    <div className="leaderboard">
      <h1>
        You got {score} questions out of {all} correct. Not bad!
      </h1>
    </div>
  );
};

export default Leaderboard;
