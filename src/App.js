import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home.jsx'
import SearchGames from "./pages/SearchGames.jsx";
import Game from "./pages/Game.jsx";
import News from "./pages/News.jsx";


function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" key="_index" element={<Home />} />
        <Route path="/games" key="_index" element={<SearchGames />} />
        <Route path="/games/:id" key="_index" element={<Game />} />
        <Route path="/news/:id" key="_index" element={<News />} />
    </Routes>
    </div>
    </Router>
  );
}

export default App;
