import React, { useEffect, useState } from 'react';
import './App.css';
import Aos from 'aos';

import Typical from 'react-typical';
import 'aos/dist/aos.css';
import Navbar from './component/Homepage';
import Bilder from './component/Bilder';
import Contact from './component/Contact';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
// import Navbar from './component/Homepage';


import Bild1 from './component/Bilder/ContainerBild.JPG';
import Bild2 from './component/Bilder/DSC0E0171.JPG';
// import Video from './Bilder/Isolated - 52130.mp4';


function App() {

  return (
    <BrowserRouter>

    <div>
        <Navbar/>
      <Switch>
      <Route path="/NicoIhlePortofolio" exact component={Home}/>
        <Route path="/NicoIhlePortofolio" component={Bilder}/>
        <Route path="/Contact" component={Contact}/>
      
      </Switch>
    </div>
    </BrowserRouter>
  );
}


const Home = ()  => 
{
  useEffect(()=>{
    Aos.init();
  })
  return(
    <div>
      <div>
        {/* <video className="HeaderVideo"  autoPlay loop muted>
        <source src={Video} type='video/mp4' />
        </video> */}
      </div>
      <div className="headerbackgroundimage" >
            <h1 className="Nico" ><Typical loop={Infinity} wrapper="b" steps={[' Nico Ihle', 1200, ' I‘m a  ', 1200, 'Photograph', 1300, '&', 1300, 'Programmer' , 1200, ]} /></h1>
      </div>

  <div  className="AboutmeTextContainer" >

    <div className="skills" >
          <h1> ◁ What i do ▷</h1>
    </div>

    <div className="SkillBoxResponsive" >
      <div className="footer-well">
        <h5>Html</h5>
        <a>öasldkfjlö</a>
        <a>aösldösld</a>
        <a>aösldsld</a>
      </div>
      <div className="footer-well">
        <h5>PHP</h5>
        <a>öasldkfjlö</a>
        <a>aösldösld</a>
        <a>aösldsld</a>
      </div>

      <div className="footer-well">
        <h5>CSS/SCSS</h5>
        <a>öasldkfjlö</a>
        <a>aösldösld</a>
        <a>aöslösld</a>
      </div>

      {/* <div className="footer-well">
        <h5>JavaScript</h5>
        <a>öasldkfjlö</a>
        <a>aösldld</a>
        <a>aösldksld</a>
      </div> */}
      <br/>
      <div className="rowtwo" >
      {/* <div className="footer-well">
        <h5>ReactJS/Native</h5>
        <a>öaslfjlö</a>
        <a>aösldösld</a>
        <a>aösldösld</a>
      </div> */}
      {/* <div className="footer-well">
        <h5>NodeJs</h5>
        <a>öasldkfjlö</a>
        <a>aösldösld</a>
        <a>aösldksld</a>
      </div> */}
      {/* <div className="footer-well">
        <h5>Swift</h5>
        <a>öasldkfjlö</a>
        <a>aösldösld</a>
        <a>aösldkd</a>
      </div> */}
      {/* <div className="footer-well">
        <h5>JAVA</h5>
        <a>öasldkfjlö</a>
        <a>aösldd</a>
        <a>aösldd</a>
      </div> */}
 

      </div>

      </div>

      {/* <div data-aos="fade-right"  className="skills">
        <h1> ◁ My skills ▷</h1>
            <li>
              <h3>HTML5</h3><span className="bar" ><span className="html" ></span></span>
            </li>
            <li>
              <h3>CSS</h3><span className="bar" ><span className="css" ></span></span>
            </li>
            <li>
              <h3>PHP</h3><span className="bar" ><span className="php" ></span></span>
            </li>
            <li>
              <h3>ReactJS/Native</h3><span className="bar" ><span className="react" ></span></span>
            </li>
            <li>
              <h3>JavaScript</h3><span className="bar" ><span className="javascript" ></span></span>
            </li>
            <li>
              <h3>Swift</h3><span className="bar" ><span className="Swift" ></span></span>
            </li>
    </div> */}

</div>


<div className="bodybackgroundimage">
    <div>

    </div>
</div>
    <div className="AboutmeTextContainer2" >
        <h2  data-aos="fade-right"  className="AboutPhotograph"  >  ◁  Photograph ▷</h2>
        
        <p data-aos="fade-right"  className="InfoTextPhotograph"  > Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore <br/> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore <br/> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore <br/>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore <br/></p>
</div>
<div className="PhotosSlider" >
  <div class="ground">
      <ReactCompareSlider itemOne={<ReactCompareSliderImage alt="one" src={Bild2} />} itemTwo={<ReactCompareSliderImage alt="two" src={Bild1} />}position={50}style={{height: '70vh',width: '80%'}}/>
  </div>
   
      <footer className='footer'>
            <div className='navbar__item'>LinkedIn <a href="#"><i class="fab fa-instagram"></i></a></div>      
                    <div className='navbar__item'> Impressum </div> 
                    <div className='navbar__item'> <a className="footerA" href="https://github.com/Nico-T-Ihle"> GitHub</a></div>   
                </footer>
  </div>
  </div>
  );

};

export default App;

