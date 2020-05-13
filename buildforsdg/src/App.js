import React, { Component } from 'react';
import Slides  from "./components/Carousel";
import 'bootstrap/dist/css/bootstrap.min.css';

 class App extends Component {
  render() {
    return (
      <div>
        <Slides/>
      </div>
    )
  }
}

export default App;