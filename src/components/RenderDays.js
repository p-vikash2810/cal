import { addDays, format, startOfWeek } from "date-fns";
import React, { Component } from "react";

export class RenderDays extends Component {
  render() {
    const dateFormat = "EEEE";
    const days = [];

    let startDate = startOfWeek(this.props.selectedDate);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col col-center" key={i}>
          {format(addDays(startDate, i), dateFormat)}
        </div>
      );
    }

    return <div className="days row">{days}</div>;
  }
}

export default RenderDays;
