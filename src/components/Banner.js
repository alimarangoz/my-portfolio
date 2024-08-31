import {useState, useEffect} from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/profile.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Software Engineer", "Backend Developer", "Computer Engineer", "Software Developer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
       let ticker = setInterval(() => {
        tick();
       }, delta)

       return () => {clearInterval(ticker)};

    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting){
            setDelta(prevDelta => prevDelta / 10);
        }

        if (!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(150);
        }
    }

    const mailTo = () => {
        window.location.href = "mailto:ali.marangoz1999@gmail.com";
      }

    return (
        <section className = "banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                        {({isVisible}) => 
                            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                <h1>{`Hi I'm Ali Marangoz `}<br/><span className="wrap">{text}</span></h1>
                                <p className='about-me'>
                                I am graduated as a Computer Engineer at Muğla Sıtkı Koçman University. My primary areas of focus are Back-end Development, and Object-Oriented Programming, Mobile Development.
                                Currently, my efforts are centered around Microservice Architecture utilizing Java.
                                </p>
                                <button onClick={mailTo}>Let's connect <ArrowRightCircle size={25} /> </button>
                            </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Headder Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}