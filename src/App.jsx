import Contact from "./components/contect/Contect";
import Footer from "./components/footer/Footer";
import MatchInfo from "./components/matchInfo/MatchInfo";
import Team from "./components/team/Team";
import TopSection from "./components/topSection/TopSection";
import Video from "./components/video/Video";

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
                <TopSection />
                <MatchInfo />
                <Contact />
                <Video />
                <Team />
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
