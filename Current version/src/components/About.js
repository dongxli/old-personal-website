import React, { Component } from "react";

export class About extends Component {
  render() {
    let name = this.props.data.name;
    let bio = this.props.data.bio;
    let email = this.props.data.email;
    let profile = this.props.data.profile;
    return (
      <section id="about">
        <div className="row">
          <div className="col-md-4 mb-5 mb-md-0">
            <img className="profile-pic" src={profile} alt="Profile Pic" />
          </div>
          <div className="col-md-8">
            <div className="row">
              <h2>About Me</h2>
              <p>{bio}</p>
            </div>
            <div className="row">
              <h2>Contact Info</h2>
              <h5>{name}</h5>
              <h5>{email}</h5>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
