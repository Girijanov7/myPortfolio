import "./footer.css";
const Footer = () => {
  return (
    <div id="footerSection">
      <div className="innerfooter">
        <p className="footerPara">
          Copywrite <i className="fa-regular fa-copyright"></i> 2024 Girija
          Nayak. All right reserved
        </p>
        <div className="footerIcon">
          <a href="#" target="_blank">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="#" target="_blank">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/girija-nayak-97b151193/"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
