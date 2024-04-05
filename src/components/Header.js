import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import userContext from "../utils.js/UserContext";
import { ThemeContext } from "../utils.js/themeContext";
// import { imgDark, imgLight } from "../utils.js/config";

const Header = () => {
  const contextData = useContext(userContext);
  const [{theme, isDark, textData} ,toggle] = React.useContext(ThemeContext);
    console.log("theme",  [theme, isDark, textData],toggle); 
  
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-light " style={{backgroundColor: theme.backgroundColor, color: theme.color}}>
        <div className="container-fluid justify-content-between">
          <a className="navbar-brand" href="/">
            <img
              src="https://i.pinimg.com/736x/a8/c7/73/a8c7733df3d7aa14c21c708ad96197a8.jpg"
              alt="logoImg"
              style={{ width: "60px" }}
              className="rounded-pill"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="mynavbar"
          >
            <ul className="navbar-nav " >
              <li className="nav-item" >
                <Link className="nav-link" style={{color: theme.color}} to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item" >
                <Link className="nav-link" style={{color: theme.color}} to="/about">
                  AboutUs
                </Link>
              </li>
              <li className="nav-item"  >
                <Link className="nav-link" style={{color: theme.color}} to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" style={{color: theme.color}} to="/franchise">
                  Partner with us
                </Link>
              </li>
              <li className="nav-item">
                <button   onClick={toggle} className="btn btn-success" >
                  {textData?.text}
                </button>
                {/* <div src={dark ? imgLight : imgDark} onClick={toggle} /> */}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
