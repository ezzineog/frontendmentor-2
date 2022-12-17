import React, { useState } from "react"
import { technology } from "../data"
import "../styles/Technology.css"
import * as  assests from '../utils/assets'



let titleStyle: object = { fontSize: assests.TYPOGRAPHY.subheaders.subheading3,color : assests.COLORS.gray }
let labelStyle: object = { fontSize: assests.TYPOGRAPHY.headers.Heading4, fontWeight: 400, fontFamily: "Bellefair" , cursor: "pointer"}

const Technology = () => {
    const [current, setCurrent] = useState(0)

    return (
        <div className="tech-container">
            {/* LEFT */}
            <div className="tech-left">
                <h1 className="title"> <b style={{ fontSize: assests.TYPOGRAPHY.headers.Heading5, fontFamily: "Barlow Condensed", color: "#d0d6f9" }}>03 </b> &nbsp; SPACE LUNCH 101</h1>
                <div className="termo">
                    <form className="left">
                        {technology.map((_tech, index) => {
                            return (
                                <div className={current == index ?  "tech-option option-active" :"tech-option" } key={index}>

                                    <input type="text" name="inp" id="inp" hidden />
                                    <label htmlFor="inp" onClick={() => setCurrent(index)} style={{ textAlign: "center" }} > <span className="lbl" style={labelStyle}>{index + 1}</span></label>
                                </div>
                            )
                        })}
                    </form>
                    <div className="right">
                        <div className="content">
                            <h1 className="title" style={titleStyle}>THE TERMINOLOGY…</h1>
                            <h1 className="header">{technology[current].name.toUpperCase()}</h1>
                            <h1 className="techdesc" style={{ fontSize: assests.TYPOGRAPHY.subheaders.subheading4 }}>{technology[current].description}</h1>
                        </div>
                    </div>
                </div>
            </div>
            {/* RIGHT */}
            <div className="tech-right">
                <img src={technology[current].images.portrait} alt="" className="spaceVehicle" />
            </div>
        </div>
    )
}
export default Technology