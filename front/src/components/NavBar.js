import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { HashLink } from "react-router-hash-link";

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, setScrolled] = useState(false);
  
    useEffect(() => {
      const onScroll = () => {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
  
      window.addEventListener("scroll", onScroll);
  
      return () => window.removeEventListener("scroll", onScroll);
    }, []);
  
    const onUpdateActiveLink = (value) => {
      setActiveLink(value);
    };
  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#projetos"
              className={
                activeLink === "project" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("programadores")}
            >
              Projetos
            </Nav.Link>
            <Nav.Link
              href="#sobre"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Sobre
            </Nav.Link>
            <Nav.Link
              href="#funcionalidades"
              className={
                activeLink === "funcionalidades"
                  ? "active navbar-link"
                  : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("funcionalidades")}
            >
              Funcionalidades
            </Nav.Link>
          </Nav>
          <a href="https://bit.ly/bangudevs" target="_blank">
                <button className="vvd">
                  <span id="equipe" >Equipe</span>
                </button>
              </a>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/company/smdeis-rio/">
                <img src={navIcon1} alt="linkedin" />
              </a>
              <a href="https://www.facebook.com/smdeis.rio/">
                <img src={navIcon2} alt="facebook" />
              </a>
              <a href="https://www.instagram.com/smdeis.rio/">
                <img src={navIcon3} alt="instagram" />
              </a>
            </div>
            <HashLink to="#inscricao">
              <button className="vvd">
                <span>Inscreva-se</span>
              </button>
            </HashLink>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
