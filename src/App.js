import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import Leaderboard from "./components/Leaderboard";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Modal />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </Router>
  );
}

export default App;
