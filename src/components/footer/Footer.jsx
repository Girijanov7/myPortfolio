import "./footer.css";
const Footer = () => {
  return (
    <footer id="footerSection">
      <div className="innerfooter">
        <p className="footerPara">Designed and build by GIRIJA NAYAK</p>
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
    </footer>
  );
};

export default Footer;
