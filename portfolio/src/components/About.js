import React, {Component} from 'react';
import BPP from '../bpp.jpg';

class About extends Component {
  render = () => {
    return (
      <div id="main-container" className="container" >
        <section className="main-section">
            <h1>About Me</h1>

            <img className="BPP" src={BPP} hieght="350" width="200" alt="BPP" />
            <p>Hello! My name is Thomas Winbush, I was born in Riverside County
                on January 23rd in 1995. I grew up in Moreno valley California most 
                of my life and also in San Bernardino. My hobbies are working out, 
                spending time with family, and riding motorcycles. As a child I was
                exposed to computers at a young age by my father, my father was a 
                Senior I.T. Technician and owned his own business for over 30 years.
                My father is my biggest role modle and has taught me everything I know 
                to this day. My father always told me that I could achieve anything in 
                this life that I put my mind to and the only person that could hinder me
                in that journey is myself.
            </p>
        </section>
      </div>
    )
  }
}

export default About;