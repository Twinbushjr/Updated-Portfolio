import React, {Component} from 'react';

class Contact extends Component {
  render = () => {
    return (
          <div id="main-container" className="container col-lg-1 col-sm -12">
              <section className="main-section">
                  <h1>Contact</h1><br></br>

                  <p>Phone Number: (951)-796-8551</p><br></br>
                  <p>Email : Thomasjrwinbush@gmail.com</p><br></br>

                  <a href="https://drive.google.com/file/d/0B-zMImn7F8SyZmYyaXFpaEw2QVN1ZVR1LXJUNy1VbXI5RE1v/view?usp=sharing">Resume</a>
                  <a className="btn btn-block btn-social btn-linkedin" href="https://www.linkedin.com/in/thomas-winbush-436577176/">
                      <span className="fa fa-linkedin"></span>LinkedIn
                    </a>
                    <a className="btn btn-block btn-social btn-github" href="https://github.com/Twinbushjr">
                      <span className="fa fa-github"></span>GitHub
                  </a>
                  <form id="contact-form">
                      <ul>
                          <li>
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name" placeholder="John Smith" required="required"></input>
                          </li>
                          <li>
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" id="email" placeholder="example@gmail.com" required="required"></input>
                          </li>
                          <li>
                              <label for="message" name="message" required="required">Message</label>
                              <textarea rows="8" cols="60" id="message" name="message" required="required"></textarea>
                          </li>
                      </ul>
                  </form><br></br>
                <div className="btnHolder" >
                  <input type="submit" name="submit"></input>
                </div>
              </section>
          </div>
    )
  }
}

export default Contact;
