import React, { Component } from "react";
import "./App.css";

import Header from "./components/Header";
import About from "./components/About";
import Resume from "./components/Resume";
// import Project from "./components/Project";
import Footer from "./components/Footer";
import data from "./data.json";

class App extends Component {
  componentWillMount() {
    this.setState({ data: data });
  }
  render() {
    return (
      <div className="App">
        <Header data={this.state.data.main} />
        <About data={this.state.data.main} />
        <Resume data={this.state.data.resume} />
        {/* <Project data={this.state.data.main} /> */}
        <Footer data={this.state.data.main} />
      </div>
    );
  }
}

export default App;
