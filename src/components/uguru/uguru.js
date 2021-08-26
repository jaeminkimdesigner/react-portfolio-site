
import React from 'react';

import { Link } from 'react-router-dom'
//import { Slide } from "react-awesome-reveal";

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
//import Badge from 'react-bootstrap/Badge';

//import { LinkContainer } from 'react-router-bootstrap';
//import Button from 'react-bootstrap/Button';

import Img00 from '../../assets/img/uguru/aerial-view-of-san-francisco-at-night-PDXCT9H.jpg';
//import Banner from '../../assets/img/uguru/banner-01.jpg';
import Img01 from '../../assets/img/uguru/1-05.jpg';
import Img02 from '../../assets/img/uguru/1-02.jpg';
import Img03 from '../../assets/img/uguru/1-03.jpg';
import Img04 from '../../assets/img/uguru/1-04.jpg';
import Img05 from '../../assets/img/uguru/1-05.jpg';
import Img06 from '../../assets/img/uguru/1-06.jpg';
import Img07 from '../../assets/img/uguru/1-07.jpg';
import Img08 from '../../assets/img/uguru/1-08.png';
import Img09 from '../../assets/img/uguru/1-09.png';

//import testtest from '../../assets/img/uguru/ttt-01.png';

import Vid1 from '../../assets/home_page_vids/compress_vid0.mp4';
import Vid2 from '../../assets/vids/compressed_vid/vid2.m4v';


import Codepen from "react-codepen-embed";

//import BannerVid from '../../assets/vids/san-francisco-USMT8JR.mp4';


import styles from './uguru.module.css';
import './uguru.css';

export const Uguru = () => (
  /* Start of JSX Fragment*/
  <>
  
<Container fluid className={styles.topfillercontainer}></Container>
    <Container fluid className={styles.containerfluid}>

      {/* left text right img */}
      <Row>
   
        <Col sm className={styles.overlay}>
          <video autoPlay preload="true" loop playsInline muted className={styles.vid}>
            <source src={Vid1} type="video/mp4" />
          </video>
        </Col>
      </Row>




      {/* img with text */}
      <Row className={styles.toprow}>
        <Col sm>

          <Container fluid className={styles.containerfluid}>
            <Jumbotron fluid className={styles.test}>
              <Container className={styles.fonttest}>
                <div className={styles.spaceing}></div>

                <p className={styles.title}>Uguru, INC</p>
                <p className={styles.description}>
                  San Francisco Mobile Application Startup
                </p>

                <p className={styles.title}>Project Date:</p>
                <p className={styles.description}>
                October 2016 - January 2017
                </p>

                <p className={styles.title}>Role:</p>
                <p className={styles.description}>Graphic UI/UX Designer Intern</p>

                <p className={styles.title}>Location:</p>
                <p className={styles.description}>San Francisco Bay Area</p>

                <p className={styles.title}>Summary</p>
                <p className={styles.description}>
                Uguru was a Mobile Application Startup funded by Bay Angels. And they were looking to launch thier client side app for the use of college students looking for tutoring services in a online marketplace.
                </p>

              </Container>
            </Jumbotron>
          </Container>


        </Col>



      </Row>

            

    </Container>

    <Container fluid>
      {/* left text right img */}
      <Row className={styles.test}>
        <Col sm className={styles.fonttest}>
          <p className={styles.title}>San Francisco Bay Area & Silicon Valley</p>
          <p className={styles.description}>Uguru, INC was a startup in San Francisco. The product that they were developing was a mobile Application for college students. It was a small team, made up of a project manager, CEO, data science intern, software enginner intern, and myself. Eventually another designer was called in and boosted the User Interface designs. The startup was located in SOMA, which is down town san francisco right across from the ferry building.</p>
        </Col>
        <Col sm>
          <Image src={Img00} fluid className={styles.imgstyle} />
        </Col>
      </Row>
    </Container>


      {/* text */}
      <Row className={styles.test}>
        <Col sm className={styles.fonttest}>
          <p className={styles.title}>High-Fidelity UI Design</p>
          <p className={styles.description}>Series of various UI designs, Initially I designed some low level mockups that were
            brought into the fold to be sued on the production application. It was a growing experience.
            I worked on the onboarding of the mobile app. For this I designed it based on some sketches
            and created a higher fidelity for them. After I created the Rapid Prototype for them using Proto.io.</p>
        </Col>
      </Row>

    <Container fluid>


      {/* left text right img */}
      <Row className={styles.test}>
        <Col sm>
          <Image src={Img08} fluid className={styles.imgstyle} />
        </Col>
        <Col sm className={styles.fonttest}>
          <p className={styles.title}>Angel Funded Mobile Application Startup in SOMA</p>
          <p className={styles.description}>Uguru received their funding of around 300k from an angel investor that was interested in building software product that would be able to create a platform for college students to get tutoring services, and other services. The peers would be able to tutor each other and be tutors for others.</p>
        </Col>
      </Row>



      {/* text */}
      <Row className={styles.test}>
        <Col sm className={styles.fonttest}>
          <p className={styles.title}>High-Fidelity UI Design</p>
          <p className={styles.description}>Series of various UI designs, Initially I designed some low level mockups that were
            brought into the fold to be sued on the production application. It was a growing experience.
            I worked on the onboarding of the mobile app. For this I designed it based on some sketches
            and created a higher fidelity for them. After I created the Rapid Prototype for them using Proto.io.</p>
        </Col>
      </Row>


      {/* img without text */}
      <Row>
        <Col sm>
          <Image src={Img03} fluid className={styles.imgstyle} />
        </Col>
      </Row>

      {/* left text right img */}
      <Row className={styles.test}>
        <Col sm className={styles.fonttest}>
          <p className={styles.title}>Development of
            the MVP</p>
          <p className={styles.description}>After the designs were completed
            they were sent over to me, and I started
            with the development of the MVP.</p>
        </Col>
        <Col sm>
          <Image src={Img04} fluid className={styles.imgstyle} />
        </Col>
      </Row>


      {/* Video */}
      <Row>
        <Col sm>
          <video autoPlay preload="true" loop playsInline muted>
            <source src={Vid1} type="video/mp4" />
          </video>
        </Col>
      </Row>

      {/* img with text */}
      <Row className={styles.test}>
        <Col sm className={styles.fonttest}>
          <p className={styles.title}>Remote Team</p>
          <p className={styles.description}>The CEO was a software developer located in Oakland, there was a designer, a social media
            specialist who did the research for the personas, as well as a admin type of person who was
            in charge of maintain admin stuff.</p>
          <Image src={Img05} fluid className={styles.imgstyle} />
        </Col>
      </Row>

      {/* text */}
      <Row className={styles.test}>
        <Col sm className={styles.fonttest}>
          <p className={styles.title}>High-Fidelity UI Design</p>
          <p className={styles.description}>Series of various UI designs, Initially I designed some low level mockups that were
            brought into the fold to be sued on the production application. It was a growing experience.
            I worked on the onboarding of the mobile app. For this I designed it based on some sketches
            and created a higher fidelity for them. After I created the Rapid Prototype for them using Proto.io.</p>
        </Col>
      </Row>



      {/* img without text */}
      <Row>
        <Col sm>
          <Image src={Img06} fluid className={styles.imgstyle} />
        </Col>
      </Row>

      {/* img with text */}
      <Row className={styles.test}>
        <Col sm className={styles.fonttest}>
          <p className={styles.title}>Developing the Web Interface</p>
          <p className={styles.description}>The designer designed it based on Bootstrap 4 UI Components so developing the site was quite easy.
            I created each page and created the fodler system. Then I implemented each page, using code. After
            the project was over I went back and I redesigned the home page and other pages, as well as
            putting the code base onto a React.JS folder system.</p>
          <Image src={Img07} fluid className={styles.imgstyle} />
        </Col>
      </Row>

      {/* left text right img */}
      <Row className={styles.test}>
        <Col sm className={styles.fonttest}>
          <p className={styles.title}>Completion of
            the MVP</p>
          <p className={styles.description}>The CEO didn’t move any farther
            with the project and it fell through it
            and didn’t go anywhere. We can say
            that the project was closed because of
            lack of interest, or lack of effort, or
            people decided as a group that we were
            going to come apart, maybe we didn’t
            have enough funding.</p>
        </Col>
        <Col sm>
          <Image src={Img08} fluid className={styles.imgstyle} />
        </Col>
      </Row>

    </Container>

    <Jumbotron fluid className={styles.bottomNav}>
      <Container>
        <Row className={styles.bottomNavColor}>
          <Col sm={6}>
            <p className={styles.title}>Home</p>
            <Link to={'/'}>
              <p className={styles.description}> Go Home </p>
            </Link>
          </Col>
          <Col sm={6} >
            <p className={styles.title}>Legacy Pictures</p>
            <p className={styles.description}>International Videography Website Redesign</p>
            <Link to={'/legacypictures'}>
              <p className={styles.description}> View Next </p>
            </Link>
          </Col>
        </Row>
      </Container>
    </Jumbotron>

  </>
  /* End of JSX Fragment*/
)