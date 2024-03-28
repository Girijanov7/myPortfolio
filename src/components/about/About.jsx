import "./about.css";

const mySkills = [
  {
    skillName: "Javascript",
  },
  {
    skillName: "HTML",
  },
  {
    skillName: "CSS",
  },
  {
    skillName: "ECMA Script",
  },
  {
    skillName: "React.js",
  },
  {
    skillName: "Redux",
  },
  {
    skillName: "Bootstrap",
  },

  {
    skillName: "Figma",
  },

  {
    skillName: "Responsive Design",
  },
  {
    skillName: "UI Development",
  },
  {
    skillName: "Git",
  },
  {
    skillName: "Agile Management",
  },
];

const About = () => {
  return (
    <>
      <div id="aboutContainer">
        <h1 className="aboutPageHeading">
          <i className="fa-solid fa-chevron-left"></i>About /
          <i className="fa-solid fa-chevron-right"></i>
        </h1>
        <div className="aboutInnerContainer">
          <div className="aboutLeft">
            <h3 className="skills">Skills</h3>
            <div className="skillsSection">
              {mySkills.map((items) => (
                <span key={items.skillName}>
                  <i
                    className="fa-solid fa-square-check"
                    style={{
                      marginRight: "0.5rem",
                      color: "blue",
                    }}
                  ></i>
                  {items.skillName}
                </span>
              ))}
            </div>
          </div>
          <div className="aboutRight">
            <h3 className="education">Education</h3>
            <div className="educationSection">
              <div className="btech">
                <h5>2016-2020</h5>
                <h3 className="btechH3">Betchlor of technology</h3>
                <h5>Gandhi Institute For Technology</h5>
              </div>
              <div className="bac">
                <h5>2014-2016</h5>
                <h3 className="bacH3">
                  Council of Higher secondary Education(CHSE)
                </h3>
                <h5>Sidheswar College of Science</h5>
              </div>
              <div className="highSchool">
                <h5>2012-2014</h5>
                <h3 className="highSchoolH3">
                  High School Certificate Examination (HSCE)
                </h3>
                <h5>R.K Govt High School</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="aboutHr" />
    </>
  );
};

export default About;
