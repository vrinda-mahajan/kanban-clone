import {
  ArrowDown,
  ArrowLeft,
  Calendar2,
  Colorfilter,
  MessageQuestion,
  Notification,
  SearchNormal,
} from "../../assets/icons/index";
import { ProfileImg } from "../../assets/images";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="flex-r navbar">
      <div className="flex-r navbar-logo-wrapper">
        <div className="flex-r navbar-logo">
          <img src={Colorfilter} />
          <h4>Project M.</h4>
        </div>
        <img className="navbar-logo-icon" src={ArrowLeft} />
      </div>
      <div className="flex-r navbar-right-section">
        <div className="navbar-input-wrapper">
          <img alt="search-icon" src={SearchNormal} />
          <input placeholder="Search for anything..." />
        </div>
        <div className="flex-r">
          <div className="flex-r navbar-icons-wrapper">
            <img src={Calendar2}></img>
            <img src={MessageQuestion}></img>
            <img src={Notification}></img>
          </div>
          <div className="flex-r navbar-profile-wrapper">
            <div className="navbar-profile-details">
              <h6>Anima Agarwal</h6>
              <p>U.P, India</p>
            </div>
            <div className="navbar-profile-img">
              <img src={ProfileImg} />
            </div>
            <img src={ArrowDown} />
          </div>
        </div>
      </div>
    </nav>
  );
}
