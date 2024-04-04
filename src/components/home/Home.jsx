import "./home.css";
import myImage from "../../assets/myImage.jpeg";
import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";
const Home = () => {
  return (
    <>
      <div id="homeContainer">
        <img className="homeImage" src={myImage} alt="" />
        <div className="homeRightSection">
          <div className="homeTextArea">
            <h1 className="homeH1">
              <span>Hi</span>
              <br /> I am Girija Nayak
            </h1>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Frontend Developer",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "UI Developer",
                1000,
                "React.js Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              className="homeH3"
              // style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
            />
            {/* <h3 className="homeH3">fdgfdgfdgdf</h3> */}
            <p className="homeP">
              Seeking a challenging role at a reputed organization <br /> to
              utilize my skills that can contribute to the growth of the <br />
              organization as well as enhance my knowledge by exploring new
              things.
            </p>
            <Link
              activeClass="active"
              to="aboutContainer"
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
              className="aboutMebtn"
            >
              About Me
            </Link>
            <a
              href="https://drive.google.com/file/d/1b5sWCBJbfMXjqGoxkm9hvdsDClhh5GH_/view"
              target="_blank"
              className="resumebtn"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
      <hr className="homeHr" />
    </>
  );
};

export default Home;
