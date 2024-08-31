import { Col, Container, Row, Tab, Nav } from "react-bootstrap";
import { ExperienceCard } from "./ExperienceCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import expImg1 from "../assets/img/expImg1.png";
import expImg2 from "../assets/img/expImg2.png";
import expImg3 from "../assets/img/expImg3.png";
import 'animate.css';

export const Experiences = () => {
    const experiences = [
        {
            firmName: "Gefeasoft",
            title: "Intern",
            description: "Web Developer (HTML5, CSS, JavaScript, PHP, SQL)",
            workingYears: "Jun 15 - Sept 15 2021",
            imgUrl: expImg1,
        },
        {
            firmName: "Optiyol",
            title: "Intern",
            description: "Backend Developer (Python, Django, SQL)",
            workingYears: "Jun 27 - 31 Aug 2022",
            imgUrl: expImg2,
        },
        {
            firmName: "Yapı Kredi Teknoloji",
            title: "Asistant Software Engineer",
            description: "Backend Developer (Java, Spring, Spring Boot, PLSQL)",
            workingYears: "Apr 3 2023 - ",
            imgUrl: expImg3,
        }
    ];

    return (
        <section className="experience" id="experiences"> 
            <Container>
                <Row>
                    <Col>
                        <h2>Experiences</h2>
                        <p>
                        These are the experiences I have gained from the time I stepped into the world of software in 2021 until today.   
                        </p>
                        <Tab.Container id="experiences-tabs" defaultActiveKey="first">         
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        {/* <Nav.Item>
                            <Nav.Link eventKey="first">Tab One</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Tab Two</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">
                            Tab Three
                            </Nav.Link>
                        </Nav.Item> */}
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        experiences.map((experiences, index) => {
                                            return (
                                                <ExperienceCard 
                                                key={index}
                                                {...experiences}
                                                />
                                            )
                                        })
                                    }
                                </Row>
                                
                            </Tab.Pane>
{/*                             <Tab.Pane eventKey="second">
                                Lorem ipsum bla bla bla
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                Lorem ipsum bla bla
                            </Tab.Pane> */}
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}
