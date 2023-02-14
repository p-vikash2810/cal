import React, { Component } from "react";
import { format } from "date-fns";

export class RenderHeader extends Component {
  render() {
    const dateFormat = "MMMM yyyy";

    return (
      <div className="header row flex-middle">
        <div className="col col-center">
          <span>{format(this.props.selectedDate, dateFormat)}</span>
        </div>
      </div>
    );
  }
}

export default RenderHeader;
