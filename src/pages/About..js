// src/pages/about.js
import React from "react";
import { Link } from "gatsby";

const About= () => {
  return (
  
          <div>  
            <section>
                <p>
                    Chifavz studio we are passionate and results-driven web developer based in Dallas Tx. With a strong foundation in user interface, I strive to create seamless and engaging digital experiences.
                </p>
                <p>
                    My journey in web development started with a fascination for turning ideas into interactive and user-friendly websites. Over the years, I've honed my skills in HTML, CSS, JavaScript, and various frameworks to bring creative concepts to life.
                </p>
                <p>
                    What sets me apart is my commitment to delivering high-quality solutions tailored to meet the unique needs of each project. I thrive on challenges and enjoy staying updated with the latest technologies to provide cutting-edge solutions.
                </p>
            </section>

            <section>
                <h3>Key Skills</h3>
                <ul>
                    <li>Responsive Web Design</li>
                    <li>React.js </li>
                    <li>Node.js and Express</li>
                    <li>RESTful API Development</li>
                    <li>Version Control (Git)</li>
                    <li>Redux.js</li>
                    <li>Gatsby.js</li>
                </ul>
            </section>

            <section>
                <h3>Let's Connect</h3>
                <p>
                    I'm always open to new opportunities and collaborations. Whether you have a project in mind or just want to connect, feel free to reach out. Let's create something amazing together!
                </p>
            </section>
        
        
    <Link to="/">Go to Home</Link>
  </div>
);
  }
export default About;
