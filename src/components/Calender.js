import React from "react";
import RenderHeader from "./RenderHeader";
import RenderDays from "./RenderDays";
import RenderCells from "./RenderCells";

class Calendar extends React.Component {
  state = {
    selectedDate: this.props.date,
  };

  render() {
    const { selectedDate } = this.state;
    return (
      <div className="calendar">
        <RenderHeader selectedDate={selectedDate} />
        <RenderDays selectedDate={selectedDate} />
        <RenderCells selectedDate={selectedDate} />
      </div>
    );
  }
}

export default Calendar;
