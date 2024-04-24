import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  const handleClick = (event) => {
    event.preventDefault();
    alert("Twitter X is currently unavailable in Pakistan");
  };
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/laibah-shahid-275474265/" target="_blank"><img src={navIcon1} alt="" /></a>
            <a href="https://github.com/Laibah-Shahid" target="_blank"><img src={navIcon2} alt="" /></a>
            <a href="#" onClick={handleClick}><img src={navIcon3} alt="" /></a>
            </div>
            <p>&copy; {new Date().getFullYear()} . All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}