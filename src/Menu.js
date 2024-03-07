import './App.css';
// import SocialLinks from './SocialLinks';

/***********************
  Menu Component
 ***********************/

  const Menu = props => {
    return (
      <div className={`menu-container ${props.showMenu}`}>
        <div className="overlay" />
        <div className="menu-items">
          <ul>
            <li>
              <a href="#welcome-section" onClick={props.toggleMenu}>
                HOME
              </a>
            </li>
            <li>
              <a href="#about" onClick={props.toggleMenu}>
                ABOUT
              </a>
            </li>
            <li>
              <a href="#projects" onClick={props.toggleMenu}>
                MY JOURNEY
              </a>
            </li>
            <li>
              <a href="#contact" onClick={props.toggleMenu}>
                CONTACT
              </a>
            </li>
            {/* <li>
            <SocialLinks />
            </li> */}
          </ul>
        </div>
      </div>
    );
  };
  
  export default Menu;