import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import skill1 from "../assets/img/skill1.svg"
import skill2 from "../assets/img/skill2.svg"
import skill3 from "../assets/img/skill3.svg"
import skill4 from "../assets/img/skill4.svg"
import colorSharp from "../assets/img/color-sharp.png"


export const Skills = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>I'm a Backend Developer, so technologies that I'm using are around server side development.</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={skill1} alt="Image" />
                                    <h5>Spring Development</h5>
                                </div>
                                <div className="item">
                                    <img src={skill4} alt="Image" />
                                    <h5>Spring Boot Development</h5>
                                </div>
                                <div className="item">
                                    <img src={skill2} alt="Image" />
                                    <h5>Hibernate Development</h5>
                                </div>
                                <div className="item">
                                    <img src={skill3} alt="Image" />
                                    <h5>PL-SQL/MySQL/PostgreSQL Development</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} />
        </section>
      )

}