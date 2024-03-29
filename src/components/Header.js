import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-light bg-warning">
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
            <ul className="navbar-nav ">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  AboutUs
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/franchise">
                  Partner with us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
