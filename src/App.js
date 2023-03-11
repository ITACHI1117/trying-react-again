import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Airbnb from "./pages/Airbnb";
import Card from "./pages/Card";
import TJournal from "./pages/TJournal";
import Joker from "./pages/Joker";
import UseCallback from "./components/Hooks/UseCallback";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/airbnb" element={<Airbnb />} />
        <Route path="/tjournal" element={<TJournal />} />
        <Route path="/joker" element={<Joker />} />
        <Route path="/hooks" element={<UseCallback />} />
      </Routes>
    </Router>
  );
}

export default App;
