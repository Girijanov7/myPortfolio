import "./experience.css";
import xeljianz from "../../assets/xeljianz.png";
import cibinqo from "../../assets/cibinqo.png";
import eucrisa from "../../assets/eucrisa.png";
import inflectra from "../../assets/inflectra.png";

const Experience = () => {
  return (
    <>
      <div id="experienceSection">
        <h1 className="experienceSectionH1">
          <i className="fa-solid fa-chevron-left"></i>Experience /
          <i className="fa-solid fa-chevron-right"></i>
        </h1>
        <p className="experienceSectionPara">
          Top Project I have worked in my previous company
        </p>
        <div className="expCardContainer">
          <div className="expCards">
            <img className="expCardImg" src={xeljianz} alt="" />
            <h3 className="expCardH3">Pfizer Xeljiaz</h3>
            <a
              href="https://xeljanz.pfizerpro.com/"
              target="-blank"
              className="expCardBtn"
            >
              Go to Site
            </a>
          </div>
          <div className="expCards">
            <img className="expCardImg" src={cibinqo} alt="" />
            <h3 className="expCardH3">Pfizer Cibinqo</h3>
            <a
              href="https://cibinqo.pfizerpro.com/"
              target="_blank"
              className="expCardBtn"
            >
              Go to Site
            </a>
          </div>
          <div className="expCards">
            <img className="expCardImg" src={eucrisa} alt="" />
            <h3 className="expCardH3">Pfizer Eucrisa</h3>
            <a
              href="https://eucrisa.pfizerpro.com/"
              target="_blank"
              className="expCardBtn"
            >
              Go to Site
            </a>
          </div>
          <div className="expCards">
            <img className="expCardImg" src={inflectra} alt="" />
            <h3 className="expCardH3">Pfizer Inflectra</h3>
            <a
              href="https://inflectra.pfizerpro.com/"
              target="_blank"
              className="expCardBtn"
            >
              Go to Site
            </a>
          </div>
        </div>
      </div>
      <hr className="expHr" />
    </>
  );
};

export default Experience;
