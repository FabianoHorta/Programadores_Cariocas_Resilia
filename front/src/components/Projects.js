import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/1.png";
import projImg2 from "../assets/img/2.png";
import projImg3 from "../assets/img/3.png";
import projImg4 from "../assets/img/4.png";
import projImg5 from "../assets/img/5.png";
import projImg6 from "../assets/img/6.png";
import projImg8 from "../assets/img/8.png";
import projImg9 from "../assets/img/9.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import pdf from "../assets/pdf/classificacao.pdf";

export const Projects = () => {

  const galeria = [
    {
      title: "Programadores Cariocas",
      description: "Desenvolvedor Full-Stack",
      imgUrl: projImg1,
    },
    {
      title: "Programadores Cariocas",
      description: "Desenvolvedor Full-Stack",
      imgUrl: projImg2,
    },
    {
      title: "Programadores Cariocas",
      description: "Desenvolvedor Full-Stack",
      imgUrl: projImg3,
    },
    {
      title: "Programadores Cariocas",
      description: "Desenvolvedor Full-Stack",
      imgUrl: projImg4,
    },
    {
      title: "Programadores Cariocas",
      description: "Desenvolvedor Full-Stack",
      imgUrl: projImg5,
    },
    {
      title: "Programadores Cariocas",
      description: "Desenvolvedor Full-Stack",
      imgUrl: projImg6,
    },
  ];

  const empresasParceiras = [
    {
      title: "Programadores Cariocas",
      description: "Senac",
      imgUrl: projImg8,
    },
    {
      title: "Programadores Cariocas",
      description: "Resilia",
      imgUrl: projImg9,
    }
  ];
  

  return (
    <section className="project" id="projetos">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Programadores Cariocas</h2>
                  <p>O projeto Programadores Cariocas faz parte de um grande ecossistema de iniciativas conectadas, que visam tornar o Rio de Janeiro a capital de inovação e tecnologia. </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Galeria</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Classificação</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Parceiras</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            galeria.map((galeria, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...galeria}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>Evento de formatura das primeiras turmas do Programadores Cariocas.</p>
                      </Tab.Pane>
                      <Tab.Pane className="text-center" eventKey="second">

                        <a href="https://programadorescariocas.rio/wp-content/uploads/sites/8/2022/07/EDITAL_PROGRAMADORES.pdf"><button type="button" class="btn btn-primary btn-lg botao-edital">Edital</button></a>
                        <a href={pdf}><button type="button" class="btn btn-primary btn-lg">Classificação</button></a>

                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {
                            empresasParceiras.map((empresas, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...empresas}
                                />
                              )
                            })
                          }
                        </Row>
                      
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
