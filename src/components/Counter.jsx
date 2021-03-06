import React, { Component } from "react";
import "./Counter.css";
import List from "./List";

class Counter extends Component {
  constructor() {
    super();
    console.log("Counter.jsx -- Constructor");

    // Constructor is the best place to init local state.
    // place to create array, put empty string etc
    this.state = {
      count: 0,
      imageUrl: "",
      countries: []
    };
  }

  componentWillMount() {
    console.log("Counter.jsx -- Component will mount");

    // This is the first place where to put some default data..
    this.setState({
      count: 1,
      imageUrl: "https://picsum.photos/100",
      countries: ["US", "AUS", "IN"]
    });
  }

  // Arrow function only working. normal function not working.
  increment = e => {
    console.log("Counter.jsx -- increment");

    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          className="btn btn-secondary btn-sm p-3"
          onClick={this.increment}
        >
          Increment
        </button>
        <br />
        <List items={this.state.countries} />
        {/* <img src={this.state.imageUrl} alt="counter" className="mt-3" /> */}
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge mr-3 p-3 ";
    classes += this.state.count === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
