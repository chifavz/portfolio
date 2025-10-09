// src/pages/index.js
import * as React from 'react';
import { Link } from 'gatsby';
import '../styles/style.CSS';

const IndexPage = () => {
  return (
    <main>
      <title>Web Developer Portfolio</title>
      <h1>Welcome to My Portfolio!</h1>
      <p>I'm a passionate web developer. Check out my projects and skills.</p>
      <div>
      <h2>Welcome to My Portfolio</h2>
      {/* Add your introduction and any other content here */}
    
      

<header>
    <h1>Welcome to chifavz's Web Development Hub!</h1>
    <p>Elevate Your Online Presence with Creative and Innovative Web Solutions</p>
</header>

<section>
    <h2>Our Expertise</h2>
    <ul>
        <li><strong>Responsive Design:</strong> Your website looks amazing on any device.</li>
        <li><strong>Innovative Solutions:</strong> We bring creativity and innovation to every project.</li>
        <li><strong>Performance Optimization:</strong> We ensure a smooth and enjoyable user experience.</li>
        
    </ul>
</section>

<section>
    <h2>Why Choose Us?</h2>
    <ol>
        <li><strong>Experienced Team:</strong> Passionate about turning your ideas into reality.</li>
        <li><strong>Client-Centric Approach:</strong> Open communication and collaboration throughout.</li>
        <li><strong>Affordable Pricing:</strong> Competitive and transparent pricing with no hidden fees.</li>
        
    </ol>
</section>

<footer>
    <p>Contact us today to discuss your project and let's build something extraordinary together.</p>
</footer>


    </div>

      <Link to="/About">Learn more about me</Link>
    </main>
  );
};



/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */


export default IndexPage
