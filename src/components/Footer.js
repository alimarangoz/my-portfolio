import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {

    const linkedinAddress = "https://www.linkedin.com/in/ali-marangoz-794760194/";
    const githubAddress = "https://github.com/alimarangoz";
    const instagramAddress = "https://www.instagram.com/ali.marangoz99/";

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            {/* <img src={logo} alt="Logo" /> */}
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href={linkedinAddress}><img src={navIcon1} alt="Icon" /></a>
              <a href={githubAddress}><img src={navIcon2} alt="Icon" /></a>
              <a href={instagramAddress}><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}