import { useState, useEffect } from "react";
import {Navbar, Container, Nav} from "react-bootstrap";
import logo from '../assets/img/logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('experiences');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const onScroll = () => {
        if(window.scrollY > 50){
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }
      
      window.addEventListener("scroll", onScroll);

      return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
      setActiveLink(value);
    }

    const mailTo = () => {
      window.location.href = "mailto:ali.marangoz1999@gmail.com";
    }

    const linkedinAddress = "https://www.linkedin.com/in/ali-marangoz-794760194/";
    const githubAddress = "https://github.com/alimarangoz";
    const instagramAddress = "https://www.instagram.com/ali.marangoz99/";

    return (
      <Router>
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
            <Container>
              <Navbar.Brand href="#home">
                  {/* <img src={logo} alt='Logo'/> */}
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" >
                <span className = "navbar-toggle-icon"></span>
              </Navbar.Toggle>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                <Nav.Link href="#experiences" className={activeLink === 'experiences' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('experience')}>Experiences</Nav.Link>
                </Nav>
                <span className="navbar-text">
                  <div className="social-icon">
                    <a href={linkedinAddress}><img src={navIcon1} alt=""></img></a>
                    <a id="github" href={githubAddress}><img src={navIcon2} alt=""></img></a>
                    <a href={instagramAddress}><img src={navIcon3} alt=""></img></a>
                  </div>
                  <HashLink to='#connect'>
                    <button className="vvd" onClick={mailTo}>
                      <span>Let's Connect</span>
                    </button>
                  </HashLink>
                </span>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Router>
      );
}
