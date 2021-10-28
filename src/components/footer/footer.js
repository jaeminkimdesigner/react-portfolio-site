import React from 'react';

import { Slide } from "react-awesome-reveal";
import { Fade } from "react-awesome-reveal";

import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'

import Jumbotron from 'react-bootstrap/Jumbotron';
import { CSSTransition } from 'react-transition-group'

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

import Github from '../../assets/githublogo.png';
import Linkedin from '../../assets/linkedin.png';
import Behance from '../../assets/behance.png';
import Dribbble from '../../assets/dribbble.png';

import styles from './footer.module.css'

import Button from 'react-bootstrap/Button';

import { LinkContainer } from 'react-router-bootstrap';
import ScrollToTop from 'react-router-scroll-top'

import { Home } from '../home/home'
import { Contact } from '../contact/contact'
import { Uguru } from '../uguru/uguru'
import { Artrendezvous } from '../artrendezvous/artrendezvous'
import { Sanchezcoffeeco } from '../sanchezcoffeeco/sanchezcoffeeco'
import { Apexvr } from '../apexvr/apexvr'
import { Uxdesignsumo } from '../uxdesignsumo/uxdesignsumo'
import { Legacypictures } from '../legacypictures/legacypictures'
import { Stepsaver } from '../stepsaver/stepsaver'


const routes = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/legacypictures', name: 'Legacy Pictures', Component: Legacypictures },
  { path: '/artrendezvous', name: 'Art•Rendez-Vous', Component: Artrendezvous },
  { path: '/uguru', name: 'Uguru, INC.', Component: Uguru },
  { path: '/Contact', name: 'Resume', Component: Contact },
]






const Footer = () => (
/* Start of JSX Fragment*/
<>
{/* This is where the Footer is */}


<Router>
<ScrollToTop>
          <>


          
<Container className={styles.footerBackground}>






{routes.map(({ path, Component }) => (
<Route key={path} exact path={path}>
  {({ match }) => (
    <CSSTransition
      in={match != null}
      timeout={300}
      classNames="page"
      unmountOnExit
    >
      <div className="page">
        <Component />
      </div>
    </CSSTransition>
  )}
</Route>
))}











         
  <Container className={styles.navbar}>





  <Container className={styles.paddingtop}>
 
  {routes.map(route => (
    <Nav.Link 
    eventKey="1" as={Link}
    
    className={styles.navtextcss}
      key={route.path}
      as={NavLink}
      to={route.path}
      activeClassName="active"
      exact
    >

      {route.name}
     
    </Nav.Link>
  ))}




<div className={styles.spaceingblack}></div>

<Row className="justify-content-center">
  <Row className={styles.socialrow}>
  
    <Col xs={3} md={3} className={styles.centericon}>
      <a href="https://www.linkedin.com/in/hillodesign">
        <Image src={Linkedin} roundedCircle className={styles.icons} />
      </a>
    </Col>

    <Col xs={3} md={3} className={styles.centericon}>
      <a href="https://www.behance.net/jaeminkim2">
        <Image src={Behance} roundedCircle className={styles.icons} />
      </a>
    </Col>

    <Col xs={3} md={3} className={styles.centericon}>
      <a href="https://dribbble.com/hillodesign">
        <Image src={Dribbble} roundedCircle className={styles.icons} />
      </a>
    </Col>

    <Col xs={3} md={3} className={styles.centericon}>
      <a href="https://github.com/hillodesign">
        <Image src={Github} roundedCircle className={styles.icons} />
      </a>
    </Col>

  </Row>
  </Row>
</Container>


<div className={styles.spaceingblack}></div>


<p className={styles.description}>
      Hillodesign 2021
    </p>


    <div className={styles.spaceingblack}></div>








</Container>































</Container>






</>
        </ScrollToTop>
</Router>











</>
/* End of JSX Fragment*/
);

export default Footer;