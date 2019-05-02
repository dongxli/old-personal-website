import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    let email = this.props.data.email;
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
      <footer id="contact">
        <div className="scrollup">
          <a href="#about">
            <i className="fas fa-chevron-circle-up" />
          </a>
        </div>
        <div className="social">{networks}</div>
        <h3>{email}</h3>
      </footer>
    );
  }
}
