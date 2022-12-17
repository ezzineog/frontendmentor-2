import '../styles/Home.css';
import * as assets from "../utils/assets"

function Intro() {
    return (
        <div className="intro-container">

            <div className="intro-paragraph">
                <h1 style={{ fontFamily: "Barlow", fontSize: "18px", lineHeight: "32px" }}> <span style={{ fontFamily: "Barlow Condensed", fontSize: assets.TYPOGRAPHY.subheaders.subheading1, lineHeight: "172px", fontWeight: 400 }}> SO, YOU WANT TO TRAVEL TO</span>  <b style={{ fontFamily: "Bellefair", padding: 5, fontSize: assets.TYPOGRAPHY.headers.Heading1, left: "0%" }}> SPACE </b>  Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</h1>
            </div>

            <div className="intro-circle">
                <h1 style={{ fontFamily: "Bellefair", fontSize: assets.TYPOGRAPHY.headers.Heading4, fontStyle: "normal", letterSpacing: "2px", height: "37px", fontWeight: 400 }}>Explore</h1>
            </div>

        </div>
    );
}

export default Intro;
