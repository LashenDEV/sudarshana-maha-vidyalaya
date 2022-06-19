import React from "react";
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import History from "./components/pages/History/History";
import Contact from "./components/pages/Contact/Contact";
import Navbar from "./components/includes/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gallery from "./components/pages/Gallery/gallery";

function App() {
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
    }, 2000);
  }

  return (
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/history" element={<History/>}/>
            <Route path="/gallery" element={<Gallery/>}/>
          </Routes>
        </div>
      </Router>
  );
}

export default App;
