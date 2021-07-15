import React, { Component } from "react";
import "./style.css";

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
    infoText: "",
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({
      numberOfEvents: value,
    });
    this.props.updateNumberOfEvents(event.target.value);
  };

  render() {
    const numberOfEvents = this.state.numberOfEvents;
    return (
      <div className="numberOfEvents">
        <input
          type="text"
          className="EventsNumber"
          value={numberOfEvents}
          onChange={(e) => this.handleInputChanged(e)}
        />
        <label>Select Number of Events</label>
      </div>
    );
  }
}
export default NumberOfEvents;