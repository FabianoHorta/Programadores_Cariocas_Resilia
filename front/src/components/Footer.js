import { Container, Row, Col } from "react-bootstrap";
import art from '../assets/img/logofooter.png'

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
