import { Route, Routes } from "react-router-dom";
import Contact from "./components/contect/Contect";
import Footer from "./components/footer/Footer";
import MatchInfo from "./components/matchInfo/MatchInfo";
import Team from "./components/team/Team";
import Home from "./components/home/Home";
import Video from "./components/video/Video";
import Header from "./components/header/Header";
import About from "./components/about/About";
import News from "./components/news/News";
import Blog from "./components/blog/Blog";

function App() {
    return (
        <>
            <>
                {/* LOADER */}
                {/* <div id="preloader">
                    <img
                        className="preloader"
                        src="images/loading-img.gif"
                        alt=""
                    />
                </div> */}
                {/* END LOADER */}

                <Header />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/blog" element={<Blog />} />

                    <Route path="/info" element={<MatchInfo />} />
                    <Route path="/video" element={<Video />} />
                </Routes>
                <Footer />
                <a href="#home" data-scroll="" className="dmtop global-radius">
                    <i className="fa fa-angle-up" />
                </a>
                {/* ALL JS FILES */}
                {/* ALL PLUGINS */}
            </>
        </>
    );
}

export default App;
