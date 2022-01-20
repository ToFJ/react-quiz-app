import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <Link to="/">
        <p>Home</p>
      </Link>
      <Link to="/leaderboard">
        <p>Leaderboard</p>
      </Link>
    </div>
  );
};

export default Navbar;
