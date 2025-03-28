import React from "react";
import { Link, Links } from "react-router-dom";
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'

const About = () => {
  return (
    <section className="about" id="about">
     <div className="container">
      <div className="banner">
        <div className="top">
         <h1 className="heading">ABOUT US</h1> 
         <p>The only thing we're serious about is food.</p>  
        </div>
        <p className="mid">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, voluptatum praesentium quod repellat excepturi, ipsa quis amet voluptates nobis itaque molestiae fuga beatae neque quasi id ipsum earum accusantium laboriosam ut iusto nostrum magnam tenetur, debitis tempora? Nobis, vero quo reprehenderit impedit corporis aperiam fugiat facere? Iusto eius eos nam.
        </p>
        <Link to={"/"}>Explore Menu <span>
          <HiOutlineArrowNarrowRight/>
          </span>
          </Link>
        </div> 
        <div className="banner">
          <img src="/about.png" alt="about" />
          </div> 
     </div>
    </section>
  );
};

export default About;