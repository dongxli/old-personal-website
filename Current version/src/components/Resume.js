import React, { Component } from "react";

export default class Resume extends Component {
  render() {
    let firstEducation = true;
    let educations = this.props.data.education.map(function(education) {
      if (firstEducation) {
        firstEducation = false;
        return (
          <div key={education.school} className="row">
            <div className="col-md-4 mb-5 mb-md-0">
              <span className="resume_category">Education</span>
            </div>
            <div className="col-md-8">
              <h2>{education.school}</h2>
              <h6>
                {education.degree} - {education.years}
              </h6>
              <p>{education.description}</p>
            </div>
          </div>
        );
      }
      return (
        <div key={education.school} className="row additionalRow">
          <div className="col-md-4 mb-5 mb-md-0">
            <span />
          </div>
          <div className="col-md-8">
            <h2>{education.school}</h2>
            <h6>
              {education.degree} {education.years}
            </h6>
            <p>{education.description}</p>
          </div>
        </div>
      );
    });

    let firstWork = true;
    let works = this.props.data.work.map(function(work) {
      if (firstWork) {
        firstWork = false;
        return (
          <div key={work.company} className="row">
            <div className="col-md-4 mb-5 mb-md-0">
              <span className="resume_category">Work</span>
            </div>
            <div className="col-md-8">
              <h2>{work.company}</h2>
              <h6>
                {work.title} - {work.years}
              </h6>
              <p>{work.description}</p>
            </div>
          </div>
        );
      }
      return (
        <div key={work.company} className="row additionalRow">
          <div className="col-md-4 mb-5 mb-md-0">
            <span />
          </div>
          <div className="col-md-8">
            <h2>{work.company}</h2>
            <h6>
              {work.title} - {work.years}
            </h6>
            <p>{work.description}</p>
          </div>
        </div>
      );
    });

    let skills = this.props.data.skills.map(function(skill) {
      return (
        <div key={skill.name} className="skill">
          <h5>{skill.name}</h5>
          <li className="skill_bar">
            <div
              className="skill_bar_coloring"
              style={{
                width: skill.level
              }}
            />
          </li>
        </div>
      );
    });
    return (
      <section id="resume">
        <div className="category">{educations}</div>
        <hr />

        <div className="category">{works}</div>
        <hr />

        <div className="row category">
          <div className="col-md-4 mb-5 mb-md-0">
            <span className="resume_category">Skills</span>
          </div>
          <div className="col-md-8">{skills}</div>
        </div>
      </section>
    );
  }
}
