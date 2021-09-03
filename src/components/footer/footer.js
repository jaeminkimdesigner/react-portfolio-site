import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

import Github from '../../assets/githublogo.png';
import Linkedin from '../../assets/linkedin.png';
import Behance from '../../assets/behance.png';
import Dribbble from '../../assets/dribbble.png';

import styles from './footer.module.css'

import Button from 'react-bootstrap/Button';

const Footer = () => (
/* Start of JSX Fragment*/
<>
{/* This is where the Footer is */}



<Jumbotron fluid className={styles.footerBackground}>
  <Container>
<p className={styles.description}>Are you looking for an UI/UX Designer local to the San Francisco Bay Area and Silicon Valley, 
to meet in person to discuss details of your project or are you a hiring manager looking to hire someone local, currently looking for remote
or in-house positions in the San Francisco Bay Area and Silicon Valley!
</p>





  <Row className={styles.socialrow}>

    <Col xs={3} md={3} className={styles.centericon}>
    <a href="https://www.linkedin.com/in/jaeminkim-com">
      <Image src={Linkedin} roundedCircle className={styles.icons}/>
    </a>
    </Col>
    <Col xs={3} md={3} className={styles.centericon}>
    <a href="https://www.behance.net/jaeminkim2">
      <Image src={Behance} roundedCircle className={styles.icons}/>
    </a>
    </Col>
    <Col xs={3} md={3} className={styles.centericon}>
    <a href="https://dribbble.com/jaeminkim-com">
      <Image src={Dribbble} roundedCircle className={styles.icons} />
    </a>
    </Col>
    <Col xs={3} md={3} className={styles.centericon}>
    <a href="https://github.com/jaeminkim-com">
      <Image src={Github} roundedCircle className={styles.icons} />
    </a>
    </Col>
  </Row>



    <p className={styles.description}>
      All Rights Reserved
    </p>
    <p className={styles.description}>
    2021
    </p>


</Container>
</Jumbotron>



</>
/* End of JSX Fragment*/
);

export default Footer;