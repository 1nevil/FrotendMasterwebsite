import React from "react";
import "./css/footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer_Container">
        <nav className="footer_nav">
          <h3 className="footer_logo">Studio</h3>
          <div className="icons">
            <i className="fa-brands fa-facebook-square"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-pinterest"></i>
          </div>
        </nav>
        <nav className="footer_nav2">
          <a href="#">About</a>
          <a href="#">Careers</a>
          <a href="#">Events</a>
          <a href="#">Products</a>
        </nav>
        <h5 className="footer_header">© Copy right reserve by loopStdio</h5>
      </footer>
    </>
  );
};

export default Footer;
