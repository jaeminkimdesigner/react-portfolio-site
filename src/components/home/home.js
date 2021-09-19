import React from 'react';
import { useEffect, useRef, useState } from 'react';

import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
//import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
// LazyLoadImage } from 'react-lazy-load-image-component';

import { Card } from 'react-bootstrap'
import { Carousel } from 'react-bootstrap'


//import { Slide } from "react-awesome-reveal";
//import Typing from 'react-typing-animation';

import Badge from 'react-bootstrap/Badge';

import { LinkContainer } from 'react-router-bootstrap';
/*
import Img01 from '../../assets/img/uguru/ttt-01.png';
import Sanchezcoffeeimg from '../../assets/img/san.png';
import Apexvrimg from '../../assets/img/apexvr-01.png';
import Stepsaverimg from '../../assets/img/ddd-01.png';
import DasDasimg from '../../assets/img/dasdasdgg-01.png';
*/
import Img01 from '../../assets/img/uguru/ttt-01.png';
/*
import Vid01 from '../../assets/vids/compress_vid1.mp4';
*/

/*
import Uguru_Img from '../../assets/img/uguru/banner-01.jpg';
import Sanchezcoffeeco_Img from '../../assets/img/sanchezcoffeeco/banner-03.jpg';
import Apexvr_Img from '../../assets/img/dominos/1-01.jpg';
import Stepsaver_Img from '../../assets/img/stepsaver/banner-05.jpg';
import DasDas_Img from '../../assets/img/dasdasdigital/banner-02.jpg';
*/

import Image from 'react-bootstrap/Image';
import { Navbar, Nav } from 'react-bootstrap'

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

/*
import Image from 'react-bootstrap/Image';
import Pg1Img from '../../assets/img/home/1-02.jpg';
*/
/*
import Pg2Img from '../../assets/img/home/1-03.jpg';
import Pg3Img from '../../assets/img/home/1-04.jpg';
import Pg4Img from '../../assets/img/home/1-05.jpg';
import Pg5Img from '../../assets/img/home/1-06.jpg';
import Pg6Img from '../../assets/img/home/1-07.jpg';
*/

import styles from './home.module.css';
import './home.css';

import logo from '../../assets/jmk_logo-02-01.png';


import { ProgressBar } from 'react-bootstrap';
import { Spinner } from 'react-bootstrap';

import { useDispatch, useSelector } from 'react-redux';
import { getCurrentProgress, getImages, getLoadingState} from '../../store/imgLoad/reducer'
import { loadImage } from '../../store/imgLoad/actions';

import Media from 'react-media';

import AnchorLink from 'react-anchor-link-smooth-scroll'

import video from '../../assets/newhomepagevids/2.mp4';
import videomobile from '../../assets/newhomepagevids/2-1.mp4';


const importAll = (r) => {
  let images = [];
  let imageUrls = [];
  r.keys().map((item, index) => { images.push(r(item)); });

  images.map((image) => {
    imageUrls.push(image);
  })

  return imageUrls;
}



export const Home = () => {

  const dispatch = useDispatch();
  const getImageUrls = () => {
    return importAll(require.context('../../assets/newhomepagevids', false, /\.(png|jpe?g|svg|mp4|m4v)$/))
  }

  const currentLoadingState = useSelector(state => getLoadingState(state));
  const currentProgress = useSelector(state => getCurrentProgress(state));
  const images = useSelector(state => getImages(state));

  console.log("ImageList: ", images)

  useEffect(() => {
    let urls = getImageUrls();
    dispatch(loadImage(urls))
  }, [])

  console.log("Loading State: ", currentLoadingState)

var num = currentProgress;
var numberconverted = parseInt(num, 10)

  console.log("percentage: ", numberconverted)
const now = numberconverted;


  // myRef = React.createRef();
  /* Start of JSX Fragment*/
  return <>


  <div style={{ background: "#111", }}>
  <div style={{ top: "50%",}}>
  <div style={{ display: currentLoadingState ? "block" : "none" , height: "100vh", paddingTop: "40vh", }}>
  


                <h5 className={styles.test1title}>Welcome to Jaeminkim.com</h5>
                <h5 className={styles.test1title}>Loading please wait</h5>

      
        
      <ProgressBar animated now={now} label={`${now}% completed`}/>
    
    </div>
    </div>

</div>
    {images &&
    <div style={{ display: currentLoadingState ? "none" : "block" }}>






<Container className={styles.test}>
          <Row>
            <Col md={12} className={styles.removepadding}>
              <Jumbotron className={styles.mainfloatback}>
              <div className={styles.maincontentwrapper}>

                <h1 className={styles.whitetitle}>Welcome!</h1>
                <h5 className={styles.test1title}>Jae Min (John) Kim is an UI/UX Designer from the San Francisco Bay Area, and Silicon Valley.</h5>
    

                <AnchorLink href='#test5' className={styles.paddingleft}>                

                        <h1>
                          <Button className={styles.mainbutton} variant="primary">View Portfolio</Button>
                        </h1>

                        </AnchorLink>

              <LinkContainer to="/contact">
                <h1>
                  <Button className={styles.secondbutton} variant="secondary">Contact Now!</Button>
                </h1>
              </LinkContainer>

              </div>
              </Jumbotron>

              <Media queries={{
          small: "(max-width: 599px)",
          medium: "(min-width: 600px) and (max-width: 1199px)",
          large: "(min-width: 1200px)"
        }}>
          {matches => (
            <>

              {matches.small &&
                <video autoPlay preload="true" loop playsInline muted className={styles.mainvideo}>
                <source src={videomobile}/>
              </video>
                }

              {matches.medium &&
                <video autoPlay preload="true" loop playsInline muted className={styles.mainvideo}>
                <source src={video}/>
              </video>
                }

              {matches.large &&
                <video autoPlay preload="true" loop playsInline muted className={styles.mainvideo}>
                <source src={video}/>
              </video>
                }

            </>
          )}
        </Media>

            </Col>
          </Row>
        </Container>



     
      <Container className={styles.test}>
      <div id="test5"></div>
        <div className={styles.spaceing}></div>

        <LinkContainer to="/legacypictures">
          <Row>
            <Col md={12} className={styles.removepadding}>
              <Jumbotron className={styles.mainfloatback}>
              <div className={styles.maincontentwrapper}>
              <h1 className={styles.whitetitle}>Legacy Pictures</h1>
                <h5 className={styles.test1title}>International videography web application user experience and redesign.</h5>
               
                <LinkContainer to="/legacypictures">
                <h1>
                  <Button className={styles.mainbutton} variant="primary">Click to Learn More</Button>
                </h1>
              </LinkContainer>

              <AnchorLink href='#test' className={styles.paddingleft}>                

              <h1>
                <Button className={styles.mainbutton} variant="primary">View Next Piece</Button>
              </h1>

              </AnchorLink>
            </div>
              </Jumbotron>

              <Media queries={{
          small: "(max-width: 599px)",
          medium: "(min-width: 600px) and (max-width: 1199px)",
          large: "(min-width: 1200px)"
        }}>
          {matches => (
            <>

              {matches.small &&
                <video autoPlay preload="true" loop playsInline muted className={styles.mainvideo}>
                <source src={images[0]}/>
              </video>
                }

              {matches.medium &&
                <video autoPlay preload="true" loop playsInline muted className={styles.mainvideo}>
                <source src={images[1]}/>
              </video>
                }

              {matches.large &&
                <video autoPlay preload="true" loop playsInline muted className={styles.mainvideo}>
                <source src={images[1]}/>
              </video>
                }

            </>
          )}
        </Media>

            </Col>
          </Row>
        </LinkContainer>

        <div className={styles.spaceing}></div>
        <div id="test"></div>
        <LinkContainer to="/artrendezvous">
          <Row>
            <Col md={12} className={styles.removepadding}>

              <Jumbotron className={styles.mainfloatback}>
              <div className={styles.maincontentwrapper}>

                <h1 className={styles.whitetitle}>Art Rendez-Vous</h1>
                <h5 className={styles.test1title}>New York City art gallery and museum social media iOS mobile</h5>
                <LinkContainer to="/artrendezvous">
                <h1>
                  <Button className={styles.mainbutton} variant="primary">Click to Learn More</Button>
                </h1>
              </LinkContainer>
              
              <AnchorLink href='#test1' className={styles.paddingleft}>                

              <h1>
                <Button className={styles.mainbutton} variant="primary">View Next Piece</Button>
              </h1>

              </AnchorLink>

              </div>
              </Jumbotron>

              <Media queries={{
          small: "(max-width: 599px)",
          medium: "(min-width: 600px) and (max-width: 1199px)",
          large: "(min-width: 1200px)"
        }}>
          {matches => (
            <>

              {matches.small &&
                <video autoPlay preload="true" loop playsInline muted className={styles.mainvideo}>
                <source src={images[4]}/>
              </video>
                }

              {matches.medium &&
                <video autoPlay preload="true" loop playsInline muted className={styles.mainvideo}>
                <source src={images[5]}/>
              </video>
                }

              {matches.large &&
                <video autoPlay preload="true" loop playsInline muted className={styles.mainvideo}>
                <source src={images[5]}/>
              </video>
                }

            </>
          )}
        </Media>

            </Col>

          </Row>
        </LinkContainer>

        <div className={styles.spaceing}></div>
        <div id="test1"></div>

        <LinkContainer to="/uguru">
          <Row>
            <Col md={12} className={styles.removepadding}>
              <Jumbotron className={styles.mainfloatback}>
              <div className={styles.maincontentwrapper}>

                <h1 className={styles.whitetitle}>Uguru, INC.</h1>
                  <h5 className={styles.test1title}>UI/UX & graphic designer internship at mobile application</h5>
                  <LinkContainer to="/uguru">
                <h1>
                  <Button className={styles.mainbutton} variant="primary">Click to Learn More</Button>
                </h1>
              </LinkContainer>
              
              <AnchorLink href='#test2' className={styles.paddingleft}>                

              <h1>
                <Button className={styles.mainbutton} variant="primary">View Next Piece</Button>
              </h1>

              </AnchorLink>
            
               </div>
              </Jumbotron>


              <Media queries={{
          small: "(max-width: 599px)",
          medium: "(min-width: 600px) and (max-width: 1199px)",
          large: "(min-width: 1200px)"
        }}>
          {matches => (
            <>

              {matches.small &&
                <video autoPlay preload="true" loop playsInline muted className={styles.mainvideo}>
                <source src={images[2]}/>
              </video>
                }

              {matches.medium &&
                <video autoPlay preload="true" loop playsInline muted className={styles.mainvideo}>
                <source src={images[3]}/>
              </video>
                }

              {matches.large &&
                <video autoPlay preload="true" loop playsInline muted className={styles.mainvideo}>
                <source src={images[3]}/>
              </video>
                }

            </>
          )}
        </Media>



            </Col>

          </Row>
        </LinkContainer>

        <div className={styles.spaceing}></div>
        <div id="test2"></div>

        <LinkContainer to="/sanchezcoffeeco">
          <Row>
            <Col md={12} className={styles.removepadding}>
              <Jumbotron className={styles.mainfloatback}>
              <div className={styles.maincontentwrapper}>

              <h1 className={styles.whitetitle}>Sanchez Coffee</h1>
                <h5 className={styles.test1title}>Los Angeles coffee distribution company web payment platform.</h5>
                <LinkContainer to="/sanchezcoffeeco">
                <h1>
                  <Button className={styles.mainbutton} variant="primary">Click to Learn More</Button>
                </h1>
              </LinkContainer>

              
              <AnchorLink href='#test3' className={styles.paddingleft}>                

              <h1>
                <Button className={styles.mainbutton} variant="primary">View Next Piece</Button>
              </h1>

              </AnchorLink>
              
              </div>
              </Jumbotron>

              <Media queries={{
          small: "(max-width: 599px)",
          medium: "(min-width: 600px) and (max-width: 1199px)",
          large: "(min-width: 1200px)"
        }}>
          {matches => (
            <>

              {matches.small &&
                <video autoPlay preload="true" loop playsInline muted className={styles.mainvideo}>
                <source src={images[6]}/>
              </video>
                }

              {matches.medium &&
                <video autoPlay preload="true" loop playsInline muted className={styles.mainvideo}>
                <source src={images[7]}/>
              </video>
                }

              {matches.large &&
                <video autoPlay preload="true" loop playsInline muted className={styles.mainvideo}>
                <source src={images[7]}/>
              </video>
                }

            </>
          )}
        </Media>

            </Col>
          </Row>
        </LinkContainer>

        <div className={styles.spaceing}></div>
        <div id="test3"></div>

        <LinkContainer to="/apexvr">
          <Row>
            <Col md={12} className={styles.removepadding}>
              <Jumbotron className={styles.mainfloatback}>
              <div className={styles.maincontentwrapper}>

                <h1 className={styles.whitetitle}>Apex VR</h1>
                <h5 className={styles.test1title}>San Leandro videography company virtual reality web application design.</h5>
                <LinkContainer to="/apexvr">
                <h1>
                  <Button className={styles.mainbutton} variant="primary">Click to Learn More</Button>
                </h1>
              </LinkContainer>

              
              <AnchorLink href='#test4' className={styles.paddingleft}>                

              <h1>
                <Button className={styles.mainbutton} variant="primary">View Next Piece</Button>
              </h1>

              </AnchorLink>
             
                </div>
              </Jumbotron>


              <Media queries={{
          small: "(max-width: 599px)",
          medium: "(min-width: 600px) and (max-width: 1199px)",
          large: "(min-width: 1200px)"
        }}>
          {matches => (
            <>

              {matches.small &&
                <video autoPlay preload="true" loop playsInline muted className={styles.mainvideo}>
                <source src={images[8]}/>
              </video>
                }

              {matches.medium &&
                <video autoPlay preload="true" loop playsInline muted className={styles.mainvideo}>
                <source src={images[9]}/>
              </video>
                }

              {matches.large &&
                <video autoPlay preload="true" loop playsInline muted className={styles.mainvideo}>
                <source src={images[9]}/>
              </video>
                }

            </>
          )}
        </Media>


            </Col>
          </Row>
        </LinkContainer>

        <div className={styles.spaceing}></div>
        <div id="test4"></div>

        <LinkContainer to="/stepsaver">
          <Row>
            <Col md={12} className={styles.removepadding}>
              <Jumbotron className={styles.mainfloatback}>
              <div className={styles.maincontentwrapper}>
  
                <h1 className={styles.whitetitle}>Stepsaver</h1>
                <h5 className={styles.test1title}>User experience designer community website design.</h5>
                <LinkContainer to="/stepsaver">
                <h1>
                  <Button className={styles.mainbutton} variant="primary">Click to Learn More</Button>
                </h1>
              </LinkContainer>


              <AnchorLink href='#test5' className={styles.paddingleft}>                

              <h1>
                <Button className={styles.mainbutton} variant="primary">Go Back to Top</Button>
              </h1>

              </AnchorLink>

                </div>
              </Jumbotron>


              <Media queries={{
          small: "(max-width: 599px)",
          medium: "(min-width: 600px) and (max-width: 1199px)",
          large: "(min-width: 1200px)"
        }}>
          {matches => (
            <>

              {matches.small &&
                <video autoPlay preload="true" loop playsInline muted className={styles.mainvideo}>
                <source src={images[10]}/>
              </video>
                }

              {matches.medium &&
                <video autoPlay preload="true" loop playsInline muted className={styles.mainvideo}>
                <source src={images[11]}/>
              </video>
                }

              {matches.large &&
                <video autoPlay preload="true" loop playsInline muted className={styles.mainvideo}>
                <source src={images[11]}/>
              </video>
                }

            </>
          )}
        </Media>

            </Col>
          </Row>
        </LinkContainer>
      </Container>



    </div>
    }

  </>
  /* End of JSX Fragment*/
}