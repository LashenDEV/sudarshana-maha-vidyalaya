import React, {useState} from "react";
import "animate.css";
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import History from "./components/pages/History/History";
import Contact from "./components/pages/Contact/Contact";
import Navbar from "./components/includes/Navbar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Gallery from "./components/pages/Gallery/gallery";
import Footer from "./components/includes/Footer";
import ScrollToTop from "./components/Animations/ScrollToTop/ScrollToTop";
import GalleryPage from "./components/pages/Gallery/GalleryPage";
import GalleryPageSportmeet from "./components/pages/Gallery/GalleryPageSportmeet";
import GalleryPageartday from "./components/pages/Gallery/GalleryPageartday";
import GalleryPagescience from "./components/pages/Gallery/GalleryPagescience";
import GalleryPagechildrensday from "./components/pages/Gallery/GalleryPagechildrensday";
import GalleryPageEnglishday from "./components/pages/Gallery/GalleryPageEnglishday";
import GalleryPageEnvironmentday from "./components/pages/Gallery/GalleryPageEnvironmentday";
import NewsEvents from "./components/pages/NewsEvents/NewsEvents";

function App() {
    const [loading, setLoading] = useState(true);
    const spinner = document.getElementById("spinner");
    if (spinner) {
        setTimeout(() => {
            spinner.style.display = "none";
            setLoading(false);
        }, 2000);
    }

    return (
        !loading && (
            <Router>
                <ScrollToTop/>
                    <div>
                        <Navbar/>
                        <Routes>
                            <Route path="/sudarshana-maha-vidyalaya" element={<Home/>}/>
                            <Route path="/sudarshana-maha-vidyalaya/about" element={<About/>}/>
                            <Route path="/sudarshana-maha-vidyalaya/news_events" element={<NewsEvents/>}/>
                            <Route path="/sudarshana-maha-vidyalaya/contact" element={<Contact/>}/>
                            <Route path="/sudarshana-maha-vidyalaya/history" element={<History/>}/>
                            <Route path="/sudarshana-maha-vidyalaya/gallery" element={<Gallery/>}/>
                            <Route path="/sudarshana-maha-vidyalaya/galleryPage" element={<GalleryPage/>}/>
                            <Route path="/sudarshana-maha-vidyalaya/galleryPageSportmeet" element={<GalleryPageSportmeet/>}/>
                            <Route path="/sudarshana-maha-vidyalaya/galleryPageartday" element={<GalleryPageartday/>}/>
                            <Route path="/sudarshana-maha-vidyalaya/galleryPagescience" element={<GalleryPagescience/>}/>
                            <Route path="/sudarshana-maha-vidyalaya/galleryPagechildrensday" element={<GalleryPagechildrensday/>}/>
                            <Route path="/sudarshana-maha-vidyalaya/galleryPageEnglishday" element={<GalleryPageEnglishday/>}/>
                            <Route path="/sudarshana-maha-vidyalaya/galleryPageEnvironmentday" element={<GalleryPageEnvironmentday/>}/>
                         </Routes>
                        <Footer/>
                    </div>
            </Router>
        )
    );
}

export default App;
