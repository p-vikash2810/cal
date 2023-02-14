import React from "react";

import "./App.css";
import Calendar from "./components/Calender";

class App extends React.Component {
  render() {
    const date = new Date();
    return (
      <div className="App">
        <main>
          <Calendar date={date} />
        </main>
      </div>
    );
  }
}

export default App;
