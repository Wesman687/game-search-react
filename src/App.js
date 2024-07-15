import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home.jsx'
import Game from "./pages/Game.jsx";
import News from "./pages/News.jsx";
import DisplayGame from './Components/DisplayGame.jsx'
import Nav from "./pages/Nav.jsx";
import Footer from "./pages/Footer.jsx";


function App() {
  return (
    <Router>
    <div className="App">
    <Nav />
      <Routes>
        
        <Route path="/" key="_index" element={<Home />} />
        <Route path="/games" key="_index" element={<Game />} />
        <Route path="/games/:id" key="_index" element={<DisplayGame />} />
        <Route path="/news" key="_index" element={<News />} />
        
    </Routes>
    <Footer />
    </div>
    </Router>
  );
}

export default App;
