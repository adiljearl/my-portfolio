// import './App.css';
import School from './School';
import Project from './Project';
import './SocialMediaLinks.css'

/***********************
    Social Media Links Component
   ***********************/
  
    const SocialMediaLinks = props => {
        return (
            <section id="social-media">
            <div className="projects-container">
              <div className="heading">
                <h3 className="title">Connect With Me</h3>
                <p className="separator" />
                <p className="subtitle">
                    Let's stay connected! Follow me on social media for updates and insights.
                </p>
              </div>
              <div className="social-links-container">
                <div className="social-card">
                  <div className="social-icon">
                    <i className="fab fa-linkedin" />
                  </div>
                  <h4>LinkedIn</h4>
                  <p>Connect with me professionally and see my career journey.</p>
                  <a href="https://www.linkedin.com/in/mohammad-adil-412552107/" target="_blank" rel="noopener noreferrer" className="social-btn">
                    Follow on LinkedIn
                  </a>
                </div>
                <div className="social-card">
                  <div className="social-icon">
                    <i className="fab fa-instagram" />
                  </div>
                  <h4>Instagram</h4>
                  <p>Follow my coding adventures and behind-the-scenes moments.</p>
                  <a href="https://www.instagram.com/adil_jearl/" target="_blank" rel="noopener noreferrer" className="social-btn">
                    Follow on Instagram
                  </a>
                </div>
                <div className="social-card">
                  <div className="social-icon">
                    <i className="fab fa-facebook" />
                  </div>
                  <h4>Facebook</h4>
                  <p>Stay updated with my latest projects and tech insights.</p>
                  <a href="https://www.facebook.com/profile.php?id=100011072178497" target="_blank" rel="noopener noreferrer" className="social-btn">
                    Follow on Facebook
                  </a>
                </div>
              </div>
            </div>
          </section>
        );
      };

      export default SocialMediaLinks;