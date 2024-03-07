import './App.css';
import Project from './Project';
import School from './School';
import Corporate from './corporate';

/***********************
    Projects Component
   ***********************/
  
    const Projects = props => {
        return (
          <section id="projects">
            <div className="projects-container">
              <div className="heading">
                <h3 className="title">My journey</h3>
                <p className="separator" />
                <p className="subtitle">
                  So I have done my engineering from one of the unknown engineering college in india, United College Of Engineering and Research, Allahabad.
                  Started my coding journey because I had nothing else to do. <br/>
                  Solved hell lot of problems in codechef, leetcode, codeforces and where not.
                  One day I solved few problems and ranked among top 300 folks from india to get free classes from some really good mentors in IntervewBit Academy, you may know by Scaler Academy.
                </p>
                <br/>
                <p className="subtitle">
                  Lets get back into the time with following threads.
                </p>
              </div>
              <div className="projects-wrapper">
              <School
                  title="St Francis Xaviers Inter College"
                  img={'cat.jpeg'}
                  place="School"
                  link="https://www.google.com/"
                >
                  {/* <small>
                    Built using Node, Express, MongoDB, JS + jQuery + Axios, CSS + Bootstrap and Pug.
                  </small> */}
                  <p>
                  School life was more than academics; it was about forging lifelong friendships. While career-focused learning was limited, the bonds formed were invaluable. School became a place where lasting connections were nurtured, shaping memories that transcend the confines of a curriculum.
                  </p>
                </School>
                <School
                  title="United College Of Engineering And Research, Allahabad"
                  img={'college.png'}           
                  link="https://www.united.ac.in/ucer/"
                  place="College"
                >
                  <p>
                  Engineering life in college and the hostel was a dynamic blend of academics and camaraderie. From late-night coding sessions to shared laughter in hostels, it fostered a unique environment that enriched both my academic and personal experiences.
                  </p>
                </School>
                <Project
                  title="Content Management System"
                  img={'https://github.com/adiljearl/Content-management-system/blob/master/cmsHome.png?raw=true'}
                  tech="js css react node"
                  // link="https://yagoestevez-anon-msg-board.glitch.me/"
                  repo="https://github.com/adiljearl/Content-management-system/tree/master"
                >
                  <small>
                    Built using Node, Express, MongoDB, CSS + Handlebars.
                  </small>
                  <p>
                    I have built this project during my college to get a hang a of MVC architecture, Although it was not a planned one but got to learn lot of things.
                  </p>
                  <p>
                    This is a full-stack website that I made which lets the users read and post stuff.
                  </p>
                </Project>
                <School
                  title="Scaler Academy"
                  img={'scaler.png'}
                  tech="js node css"
                  place="Academy"
                  link="https://scaler.com/"
                >
                  <p>
                    Got ranked among top 300 folks in india and got an opportunity to be in the first batch of this academy to learn and become even more better in solving problems and build quality software without paying a single penny.
                  </p>
                </School>
                <Corporate
                  title="Replicon"
                  img={'Replicon.png'}
                  // tech="js node css"
                  place="Comapny"
                  link="https://scaler.com/"
                >
                  <p>
                  Again where my journey started with qualifying a national level coding test and selected as a software Engineer Intern.
                  </p>
                  <p>
                    Being an intern for six months, people thought of promoting me to the Software Engineer I position and after couple of months they gave me some more responsibilities and I got the designation of Software Engineer II.
                  </p>
                </Corporate>
                
              </div>
            </div>
          </section>
        );
      };

      export default Projects;