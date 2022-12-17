import '../styles/navbar.css';
import logo from "../shared/logo.svg"
import { Link, Outlet } from 'react-router-dom';
import * as assets from "../utils/assets"
import { useState } from 'react';
const navigationOptions: string[] = ["Home", "Destinations", "Crew", "Tech"]

//  to be refactored *
function NavBar() {
    const [current, setCurrent] = useState(0)
    return (
        <div className="nv-container">

            <div className="nav-left">
                <img className="logo" src={logo} height="50" alt="star logo" />
                <hr className='hori-line' />
            </div>

            <div className="nav-right">
                {navigationOptions.map((option, index) => {
                    return (
                        <Link onClick={() => setCurrent(index)} style={{ textDecoration: "none" }} to={option == "Home" ? "/" : option.toLocaleLowerCase()} key={index}>
                            <div className="option" id={current == index ? "active-nav" : ""}>
                                <span className='option-name' style={{ fontSize: assets.TYPOGRAPHY.subheaders.subheading3 }}>
                                    <b>0{index + 1}</b>
                                    &nbsp;
                                    {option.toLocaleUpperCase()}
                                </span>
                            </div>
                        </Link>
                    )
                })}
            </div>

        </div >
    );
}

export default NavBar;
