import { Calendar2 } from "../../assets/icons/index";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo-wrapper">
        <h4>
          <i></i>Project M.
        </h4>
        <i></i>
      </div>
      <div className="navbar-input-wrapper">
        <i></i>
        <input placeholder="Search for anything..."></input>
      </div>
      <div>
        <div className="navbar-icons-wrapper">
          <img src={Calendar2}></img>
        </div>
        <div className="navbar-profile-wrapper">
          <div className="navbar-profile-details">
            <h6>Anima Agarwal</h6>
            <p>U.P, India</p>
          </div>
          <div className="navbar-profile-img">
            <img></img>
          </div>
          <i></i>
        </div>
      </div>
    </nav>
  );
}
