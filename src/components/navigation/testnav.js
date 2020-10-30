import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { Home } from '../home/home'
import { Contact } from '../contact/contact'
import { Uguru } from '../uguru/uguru'
import { Dasdasdigital } from '../dasdasdigital/dasdasdigital'
import { Sanchezcoffeeco } from '../sanchezcoffeeco/sanchezcoffeeco'
import { Apexvr } from '../apexvr/apexvr'
import { Stepsaver } from '../stepsaver/stepsaver'
import { Blog } from '../blog/blog'
import { Feed } from '../feed/feed'


import useWindowScrollPosition from "@rehooks/window-scroll-position";

import ScrollToTop from 'react-router-scroll-top'
import { LinkContainer } from 'react-router-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

import Github from '../../assets/githublogoback.png';
import Linkedin from '../../assets/linkedin.png';
import Behance from '../../assets/behance.png';

import logo from '../../assets/jklogo-01.png';

import styles from './navigation.module.css'
import './navigation.css'

const routes = [
  { path: '/', name: 'HOME', Component: Home },
  { path: '/uguru', name: '• UGURU INC.', Component: Uguru },
  { path: '/sanchezcoffeeco', name: '• SANCHEZ COFFEE CO.', Component: Sanchezcoffeeco },
  { path: '/apexvr', name: '• APEX VR', Component: Apexvr },
  { path: '/stepsaver', name: '• STEPSAVER', Component: Stepsaver },
  { path: '/dasdasdigital', name: '• DASDAS DIGITAL', Component: Dasdasdigital },
  { path: '/Contact', name: 'CONTACT', Component: Contact },
]

function TestNav() {
  const [change, setChange] = useState(false);
  const changePosition = 300;

  let position = useWindowScrollPosition();
  // position == { x: 0, y: 0 }

  if (position.y > changePosition && !change) {
    setChange(true);
  }

  if (position.y <= changePosition && change) {
    setChange(false);
  }

  let style = {
    backgroundColor: change ? "rgba(0,0,0,0.92)" : "transparent",
    backdropFilter: change ? "saturate(180%) blur(20px)" : "none",
    transition: "400ms ease",
    position: "fixed",
    right: 0,
    left: 0,
    top: 0
  };
  return (

    <>
    
   <div ></div>

    <Router>
    <ScrollToTop>
      <>


 {/*
<LinkContainer to="/">

  <Navbar.Brand className={styles.logo}>
  <Image src={logo} fluid />
  </Navbar.Brand>

  </LinkContainer>
 */}

   <Nav className="ml-auto">
            {routes.map(route => (
              <Nav.Link
                key={route.path}
                as={NavLink}
                to={route.path}
                activeClassName="active"
                exact
              >
                {route.name}
              </Nav.Link>
            ))}
   

        </Nav>

        <Container className="container">
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
        </Container>
      </>
      </ScrollToTop>
    </Router>
    </>
   
   );
  }
  

export default TestNav;