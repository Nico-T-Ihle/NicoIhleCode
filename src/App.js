import React, { useEffect, useState } from 'react';
import './App.css';
import Aos from 'aos';
import './component/CSS/HeaderKeyframe/HeaderStarsAnimation.css';
import Typical from 'react-typical';
import 'aos/dist/aos.css';
import Navbar from './component/Homepage';
import Bilder from './component/Bilder';
import Contact from './component/Contact';
import { BrowserRouter, Route, Switch,  } from 'react-router-dom';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

// import Navbar from './component/Homepage';

// import Bild1 from './component/Bilder/ContainerBild.JPG';
// import Bild2 from './component/Bilder/DSC0E0171.JPG';
// import Video from './component/Bilder/Dark - 21449.mp4';
// import logo from './component/Bilder/undraw_Mobile_apps_re_3wjf.svg';
// import HTMLBild from './component/Bilder/20190930294html5_css3_new.jpg';
// import PHPBild from './component/Bilder/php-icon.jpg';
// import JavaScriptBild from './component/Bilder/JAVASCRIPT.png';
// import ReactBild from './component/Bilder/react-1-logo-png-transparent.png';
// import NodeBild from './component/Bilder/node.js-logo.png';
// import JavaBild from './component/Bilder/376120_java-hd-wallpapers_1600x1280_h.png';
// import swiftBild from './component/Bilder/swift-og.png';
// import googleBild from './component/Bilder/SEO.jpg';

import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";

function App() {

  return (
    <BrowserRouter>
        <Navbar/>
      <Switch>
      <Route path="/NicoIhleCode" exact component={Home}/>
        <Route path="/NicoIhleCode" component={Bilder}/>
        <Route path="/Contact" component={Contact}/>
      </Switch>
    </BrowserRouter>
  );
}

const Home = ()  => 
{
  useEffect(()=>{
    Aos.init();
  })

  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());


const [showText, setshowText] = useState(false);

const ToggelShowText = () => {

  // showText ? setshowText(false) : setshowText(true);
// eine von den beidne if abfragen geht :D
  if (showText)
  {
    setshowText(false); 
  }
  else
  {
    setshowText(true); 
  }
  console.log(showText)
}

const [showReactJS, setshowReactJS] = useState(false);

const ShowTextReactJS = () => {

  // showText ? setshowText(false) : setshowText(true);
// eine von den beidne if abfragen geht :D
  if (showReactJS)
  {
    setshowReactJS(false); 
  }
  else
  {
    setshowReactJS(true); 
  }
  console.log(showText)
}


  return(
    <div>
    

      <ScrollContainer>
        <div className="ls" >
      <ScrollPage page={0}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
        <section>
          
        <span className="stars" ></span>
        <span className="stars"></span>
        <span className="stars" ></span>
        <span className="stars" ></span>
        <span className="stars" ></span>
        <span className="stars" ></span>
        <span className="stars"></span>
        <span className="stars"></span>
        <h1 className="Nico" ><Typical loop={Infinity} wrapper="b" steps={[' Nico.Ihle', 1200, ' I‘m a  ', 1200, 'Photograph', 1300, '&', 1300, 'Programmer' , 1200, ]} /></h1>
    </section>
        
        </Animator>
      </ScrollPage>
      </div>
      <div className="l" >
      <ScrollPage page={1}>
        <Animator animation={ZoomInScrollOut}>
 
        <div className="container">
        {/* <h4>left</h4> */}
          <div className="iphonex">
            <div className="iphonex__case">
              <div className="iphonex__top">
                <div className="iphonex__time">10:30</div>
                <div className="Projekte" >
                    <h4>My Projects</h4>
                </div>
                <a className="button" onClick={ToggelShowText} ><span>React/Native</span></a>
                  
                  <p className="IPhoneUlbutton" >  {showText ? "Social Media App " : ""} </p>
                  <a className="button" onClick={ShowTextReactJS} ><span>React/JS</span></a>
                  <p className="IPhoneUlbutton" >  {showReactJS ? "Wallpaper Page " : ""} </p>
                  {/* <ul>
                    <li>              <p className="IPhoneUlbutton" >  {showReactJS ? "Wallpaper Page " : ""} </p></li>
                    <li>              <p className="IPhoneUlbutton" >  {showReactJS ? "Wallpaper Page " : ""} </p></li>
                    <li>              <p className="IPhoneUlbutton" >  {showReactJS ? "Wallpaper Page " : ""} </p></li>
                  </ul> */}

                <i className="fa fa-wifi iphonex__wifi"></i>
                <i className="fa fa-battery-quarter iphonex__battery"></i>
              
              </div>
              <div className="iphonex__notch">
                <div className="iphonex__speaker"></div>
                <div className="iphonex__camera"></div>
              </div>
              <div className="iphonex__screen"></div>
            </div>

            <div className="iphonex__power"></div>
            <div className="iphonex__volume iphonex__volume--up"></div>
            <div className="iphonex__volume iphonex__volume--down"></div>
          </div>
    {/* <h4>right</h4> */}
  </div>
        </Animator>
      </ScrollPage>
      </div>

      <div className="AboutME" >
      <ScrollPage page={2}>
        <Animator animation={FadeUp}>
          <div className="AboutMEInhalt" >
          <p>About ME</p> 
          </div> 
        </Animator>
      </ScrollPage>
      </div>



      
      <div className="test">
      <ScrollPage page={3}>
        <Animator animation={ZoomInScrollOut}>
  
      
        <h2>Bilder Gallery coming soon</h2>
  

        </Animator>
      </ScrollPage>
      </div>


    </ScrollContainer>

  


    <div>
    <footer className='footer'>
      <div className='navbar__item'> Placeholder<br/><a className="footerA" href="#"> Placeholder</a><br/><a className="footerA" href="#"> Placeholder</a></div> 
            <div className='navbar__item'> Quellen<br/><a className="footerA" href="https://undraw.co/illustrations"> unDraw</a><br/><a className="footerA" href="https://pixabay.com/de/"> Pixabay</a></div>
            <div className='navbar__item'> Social Media<br/><a className="footerA" href="https://github.com/Nico-T-Ihle"> GitHub</a><br/><a className="footerA" href="#"> LinkedIn</a></div>
        </footer>
    </div>
  </div>
  );

};

export default App;

