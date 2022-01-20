const Leaderboard = () => {
  const score = localStorage.getItem("score");
  const all = localStorage.getItem("all");

  return (
    <div className="leaderboard">
      {score > 1 ? (
        <h1>
          You got<span className="leaderboard-span">{score}</span>out of<span className="leaderboard-span">{all}</span>
          questions correct. Not bad!
        </h1>
      ) : (
        <h1>Do a Quiz and come back!</h1>
      )}
    </div>
  );
};

export default Leaderboard;
