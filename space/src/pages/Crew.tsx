import '../styles/Crew.css';
import * as assets from "../utils/assets"
import { crew } from "../data"
import { useState } from 'react';


// styles
let titleStyle: object = {
    fontSize: assets.TYPOGRAPHY.subheaders.subheading1, lineHeight: "34px", letterSpacing: "4.725px",
    textTransform: "uppercase"
}
let nameStyle: object = { fontSize: assets.TYPOGRAPHY.headers.Heading3 }
let bioStyle: object = { fontSize: assets.TYPOGRAPHY.subheaders.subheading4 }

function Crew() {
    const [current, setCurrent] = useState(0)
    return (
        <div className="crew-container">
            <div className="crew-left">
                <h1 className="barlow400" style={titleStyle}> <b id='num'>02</b> MEET YOUR CREW</h1>

                <div className="member-info">
                    <h1 className="role barlow400">{crew[current].role.toLocaleUpperCase()}</h1>
                    <h1 className="name" style={nameStyle}>{crew[current].name.toLocaleUpperCase()}</h1>
                    <p className="bio" style={bioStyle}>{crew[current].bio}</p>
                </div>
                <div className='navigator'>
                    {crew.map((_cr, index) => {
                        return (

                            <div onClick={() => setCurrent(index)} className={current == index ? "crew-nav" : "crew-nav active"} key={index}></div>)
                    })}
                </div>
            </div>
            <div className="crew-right">
                <img id="crewimg" src={crew[current].images.png} alt="his/her image" />
            </div>
        </div >
    );
}

export default Crew;
