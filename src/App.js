import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Game from "./pages/Game.jsx";
import News from "./pages/News.jsx";
import DisplayGame from './Components/DisplayGame.jsx'
import Nav from "./pages/Nav.jsx";
import Footer from "./pages/Footer.jsx";
import DisplayNews from "./Components/DisplayNews.jsx";
import Landing from "./pages/Landing.jsx";


function App() {
  return (
    <Router>
    <div className="App">
    <Nav />
      <Routes>
        
        <Route path="/" key="_index" element={<Landing />} />
        <Route path="/games" key="_index" element={<Game />} />
        <Route path="/games/:id" key="_index" element={<DisplayGame />} />
        <Route path="/news" key="_index" element={<News />} />
        <Route path='/news/article' key="_index" element={<DisplayNews  />} />
        
    </Routes>
    <Footer />
    </div>
    </Router>
  );
}

export default App;
