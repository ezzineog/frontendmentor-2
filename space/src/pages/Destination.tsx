import React, { ChangeEvent, Fragment, useState } from 'react';
import '../styles/Destination.css'
import * as  assests from '../utils/assets'
import { destinations } from "../data.js"

// styles
let labelStyle: object = { fontSize: assests.TYPOGRAPHY.subheaders.subheading3, fontFamily: "Barlow Condensed" }
let titleStyle: object = { fontFamily: "Barlow Condensed", fontWeight: 400 }
let numStyle: object = { marginRight: "20px", fontFamily: "Barlow Condensed" }
let distStyle: object = { fontFamily: "Bellefair", fontSize: assests.TYPOGRAPHY.headers.Heading5 }
let travelStyle: object = { fontFamily: "Bellefair", fontSize: assests.TYPOGRAPHY.headers.Heading5 }

const Destination = () => {
    const [current, setCurrent] = useState(0)

    return (
        <div className="container">

            {/* LEFT */}
            <div className="dest-left">
                <h1 className="dest-title" style={titleStyle} >
                    <span id="num" style={numStyle}>01</span>
                    Pick your destination
                </h1>
                <img src={destinations[current].images.png} alt="PLanet img" id="img" />
            </div>

            {/* RIGHT */}
            <div className="dest-right">
                <div className="info-container">

                    <form className="slider">
                        {destinations.map((planet, index) => {
                            return (
                                <Fragment key={index}>
                                    <input id={index.toString()} type="text" hidden />
                                    <label className={index == current ? "label-active " : "label-inactive"} onClick={() => setCurrent(index)} htmlFor="moon" style={labelStyle}>{planet["name"].toUpperCase()}</label>
                                </Fragment>
                            )
                        }
                        )}
                    </form>

                    <div className="text-container">
                        <h1 className="a" style={{ fontSize: assests.TYPOGRAPHY.headers.Heading2, fontFamily: "Bellefair" }} >{destinations[current].name.toLocaleUpperCase()}</h1>
                        <p className="par" style={{ fontFamily: "Barlow", fontSize: assests.TYPOGRAPHY.subheaders.subheading3 }}>
                            {destinations[current].description}
                        </p>
                    </div>

                    <div className="planet">
                        <div className="distance">
                            <span>AVG. DISTANCE</span>
                            <h1 style={distStyle}>{destinations[current].distance.toLocaleUpperCase()} </h1>
                        </div>
                        <div className="trvl-time">
                            <span>EST. TRAVEL TIME</span>
                            <h1 style={travelStyle}>{destinations[current].travel.toLocaleUpperCase()} </h1>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )

}

export default Destination;