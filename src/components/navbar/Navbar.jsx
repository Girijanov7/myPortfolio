import { Link } from "react-scroll";
import "./navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowmenu] = useState("none");

  const handleToggle = () => {
    console.log("clicked");
    if (showMenu === "none") {
      setShowmenu("flex");
    } else if (showMenu === "flex") {
      setShowmenu("none");
    }
  };
  return (
    <nav className="navigation">
      <div className="logo">
        <span>G</span>.NAYAK
      </div>
      <div className="navItemDiv">
        <Link
          activeClass="active"
          to="homeContainer"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="navListItem"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="aboutContainer"
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
          className="navListItem"
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="experienceSection"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="navListItem"
        >
          Experience
        </Link>
        <Link
          activeClass="active"
          to="contactSection"
          spy={true}
          smooth={true}
          offset={-10}
          duration={500}
          className="navListItem"
        >
          Contact
        </Link>
      </div>
      <div className="hamburger">
        <i className="fa-solid fa-bars" onClick={() => handleToggle()}></i>
      </div>
      {/*mobile navigation*/}
      <div className="mobNavItemDiv" style={{ display: showMenu }}>
        <Link
          activeClass="active"
          to="homeContainer"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="navListItem"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="aboutContainer"
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
          className="navListItem"
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="experienceSection"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="navListItem"
        >
          Experience
        </Link>
        <Link
          activeClass="active"
          to="contactSection"
          spy={true}
          smooth={true}
          offset={-10}
          duration={500}
          className="navListItem"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
