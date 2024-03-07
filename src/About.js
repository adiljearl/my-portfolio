import './App.css';

/***********************
    About Component
   ***********************/
  
    const About = props => {
        return (
          <section id="about">
            <div className="wrapper">
              <article>
                <div className="title">
                  <h3>Who's this guy?</h3>
                  <p className="separator" />
                </div>
                <div className="desc full">
                  <h4 className="subtitle">My name is Adil.</h4>
                  <p>
                  I am a passionate and results-driven software engineer with a proven track record of designing, implementing, and maintaining complex software solutions.
                  </p>
                  <p>
                  My dedication to crafting efficient and scalable code is matched only by my enthusiasm for tackling new challenges and staying at the forefront of emerging technologies.
                  </p>
                </div>
                <div className="title">
                  <h3>What does he do?</h3>
                  <p className="separator" />
                </div>
                <div className="desc">
                  <h4 className="subtitle">I'm a software engineer.</h4>
                  <p>
                  I specialize in Nodejs, React, and C# development, excelling in problem-solving through advanced data structures and algorithms, leveraging these technologies to create robust and scalable software solutions.
                  </p>
                  <p>
                  My expertise extends to infrastructure development, where I utilize Terraform to design and deploy efficient and automated environments. With a strong focus on AWS, I've successfully implemented cloud solutions, optimizing performance and ensuring high availability. From crafting serverless applications to managing intricate infrastructure setups, my experience spans the entire software development lifecycle. I bring a comprehensive skill set to the table, combining coding proficiency with a deep understanding of cloud technologies and infrastructure as code practices.
                  </p>
                </div>
                <div className="desc">
                  <h4 className="subtitle">Also a traveller.</h4>
                  <p>
                  While my passion for travel has been somewhat limited due to other commitments, I've embarked on journeys across various enchanting destinations in India. Although my explorations have been constrained, the desire to witness the diverse beauty crafted by nature remains fervent.
                  </p>
                  <p>
                  Eager to expand my horizons, I aspire to explore the world extensively and immerse myself in the captivating landscapes and cultures it offers. My love for travel is a testament to my curiosity and eagerness to embrace the extraordinary experiences that the global tapestry has to offer.
                  </p>
                </div>
              </article>
            </div>
          </section>
        );
      };

      export default About;