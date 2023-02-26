import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Airbnb from "./pages/Airbnb";
import Card from "./pages/Card";
import TJournal from "./pages/TJournal";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/airbnb" element={<Airbnb />} />
        <Route path="/tjournal" element={<TJournal />} />
      </Routes>
    </Router>
  );
}

export default App;
