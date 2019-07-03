import React, {Component} from 'react';
// import { Link } from "react-router-dom";
import Giftastic from '../giftastic.jpg';
import Currency from '../currency.jpg';
import Psychic from '../psychic.JPG';
import Train from '../train.jpg';
// import Trivia from '../trivia.jpg';

class Portfolio extends Component {
  render = () => {
    return (
        <div id="main-container" className="container col-lg-1 col-sm -12">
            <section className="main-section col-lg-1 col-sm -12">
                <h1>Portfolio</h1>

                <div className="work">
                    <a href="https://giftastic-thomas.herokuapp.com/">
                        <img src={Giftastic} className="auth-image" alt="Giftastic"></img>
                        <h3>Giftastic</h3>
                    </a>
                </div>
                <div className="work col-lg-1 col-sm -12">
                    <a href="https://1curtislee.github.io/Currency-Converter/">
                        <img src={Currency} className="auth-image" alt="CurrencyConverter"></img>
                        <h3>Currency Converter</h3>
                    </a>
                </div>
                <div className="work col-lg-1 col-sm -12">
                    <a href="https://psychic-app.herokuapp.com/">
                        <img src={Psychic} className="auth-image" alt="ThePsychicGame"></img>
                        <h3>Psychic Game</h3> 
                    </a>
                </div>
                <div className="work col-lg-1 col-sm -12">
                    <a href="https://thomas-the-train.herokuapp.com/">
                        <img src={Train} className="auth-image" alt="TrainScheduler"></img>
                        <h3>Train Scheduler</h3>
                    </a>
                </div>
                {/* <div className="work">
                    <a href="file:///C:/Users/thoma/OneDrive/Desktop/thomasFolder/Trivia%20Game/TriviaGame.html">
                        <img src={Trivia} classNameName="auth-image" alt="Trivia Game"></img>
                        <h3>Trivia Game</h3>
                    </a>
                </div> */}
            </section>
        </div>
    )
  }
}

export default Portfolio;