import './App.css';
import React from 'react';
import Menu from './Menu.js';
import Nav from './Nav.js';
import Header from './Header.js';
import About from './About.js';
import Contact from './Contact.js';
import Projects from './Projects.js';
import Footer from './Footer.js';
import SocialMediaLinks from './SocialMediaLinks.js';

  /***********************
    Main Component
   ***********************/
  
    class App extends React.Component {
      state = {
        menuState: false
      };
    
      toggleMenu = () => {
        this.setState(state => ({
          menuState: !state.menuState
            ? 'active'
            : state.menuState === 'deactive'
              ? 'active'
              : 'deactive'
        }));
      };
    
      render() {
        return (
          <React.Fragment>
            <Menu toggleMenu={this.toggleMenu} showMenu={this.state.menuState} />
            <Nav toggleMenu={this.toggleMenu} showMenu={this.state.menuState} />
            <Header />
            <About />
            <Projects />
            <SocialMediaLinks />
            <Contact />
            <Footer />
          </React.Fragment>
        );
      }
    
      componentDidMount() {
        const navbar = document.querySelector('#navbar');
        const header = document.querySelector('#welcome-section');
        const forest = document.querySelector('.forest');
        const silhouette = document.querySelector('.silhouette');
        let forestInitPos = -300;
    
        window.onscroll = () => {
          let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
    
          if (scrollPos <= window.innerHeight) {
            silhouette.style.bottom = `${parseInt(scrollPos / 6)}px`;
            forest.style.bottom = `${parseInt(forestInitPos + scrollPos / 6)}px`;
          }
    
          if (scrollPos - 100 <= window.innerHeight)
            header.style.visibility = header.style.visibility === 'hidden' && 'visible';
          else header.style.visibility = 'hidden';
    
          if (scrollPos + 100 >= window.innerHeight) navbar.classList.add('bg-active');
          else navbar.classList.remove('bg-active');
        };
    
        (function navSmoothScrolling() {
          const internalLinks = document.querySelectorAll('a[href^="#"]');
          for (let i in internalLinks) {
            if (internalLinks.hasOwnProperty(i)) {
              internalLinks[i].addEventListener('click', e => {
                e.preventDefault();
                document.querySelector(internalLinks[i].hash).scrollIntoView({
                  block: 'start',
                  behavior: 'smooth'
                });
              });
            }
          }
        })();
      }
    }    

      export default App;
