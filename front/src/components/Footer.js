import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import art from '../assets/img/logofooter.png'
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container className="container-footer">
        <Row className="align-items-center">
          <Col size={12} sm={8}>
            <img className="space-art" src={art} alt="Logo" />
          </Col>
          
        </Row>
      </Container>
    </footer>
  )
}
