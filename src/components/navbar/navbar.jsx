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

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo-wrapper">
        <h4>
          <img src={Colorfilter} />
          Project M.
        </h4>
        <img src={ArrowLeft} />
      </div>
      <div className="navbar-input-wrapper">
        <img src={SearchNormal} />
        <input placeholder="Search for anything..."></input>
      </div>
      <div>
        <div className="navbar-icons-wrapper">
          <img src={Calendar2}></img>
          <img src={MessageQuestion}></img>
          <img src={Notification}></img>
        </div>
        <div className="navbar-profile-wrapper">
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
    </nav>
  );
}
