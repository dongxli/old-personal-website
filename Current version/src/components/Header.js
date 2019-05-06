import React, { Component } from "react";

export default class Header extends Component {
  render() {
    // "description": "I'm not Mark Zuckerberg of Facebook, I'm not Beethoven of music, but I am who I am and I will be who I want to be.",
    let name = this.props.data.name;
    let occupation = this.props.data.occupation;
    let description = this.props.data.description;
    let networks = this.props.data.social.map(function(social) {
      return (
        <li key={social.name}>
          <a href={social.url}>
            <i className={social.className} />
          </a>
        </li>
      );
    });
    return (
      <header>
        <nav id="nav-wrap" className="navbar navbar-expand-lg navbar-light">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ outline: "none", border: "none" }}
          >
            <i className="fas fa-bars" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul id="nav" className="navbar-nav mx-auto">
              <li className="nav-item current">
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#resume">
                  Resume
                </a>
              </li>
              {/* <li class="nav-item">
                <a className="nav-link" href="#projects">
                  Projects
                </a>
              </li> */}
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="banner">
          <div className="banner-text">
            <h1>I'm {name}</h1>
            <h3>
              I'm currently a {occupation}. {description}
            </h3>
            <hr />
            <ul className="social">{networks}</ul>
          </div>
        </div>
        <div className="scrolldown">
          <a href="#about">
            <i className="fas fa-chevron-circle-down" />
          </a>
        </div>
      </header>
    );
  }
}
