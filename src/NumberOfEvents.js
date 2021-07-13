import React, { Component } from "react";
import "./style.css";

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
    infoText: "",
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