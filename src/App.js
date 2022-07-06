import React, {useState} from "react";
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
                            <Route path="/sudarshana-maha-vidyalaya/" element={<Home/>}/>
                            <Route path="/about" element={<About/>}/>
                            <Route path="/news_events" element={<NewsEvents/>}/>
                            <Route path="/contact" element={<Contact/>}/>
                            <Route path="/history" element={<History/>}/>
                            <Route path="/gallery" element={<Gallery/>}/>
                            <Route path="/galleryPage" element={<GalleryPage/>}></Route>
                            <Route path="/galleryPageSportmeet" element={<GalleryPageSportmeet/>}></Route>
                            <Route path="/galleryPageartday" element={<GalleryPageartday/>}></Route>
                            <Route path="/galleryPagescience" element={<GalleryPagescience/>}></Route>
                            <Route path="/galleryPagechildrensday" element={<GalleryPagechildrensday/>}></Route>
                            <Route path="/galleryPageEnglishday" element={<GalleryPageEnglishday/>}></Route>
                            <Route path="/galleryPageEnvironmentday" element={<GalleryPageEnvironmentday/>}></Route> 
                         </Routes>
                        <Footer/>
                    </div>
            </Router>
        )
    );
}

export default App;
