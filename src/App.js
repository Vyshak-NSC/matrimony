// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Route, Routes} from "react-router-dom";// Switch, Link, Redirect 
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
