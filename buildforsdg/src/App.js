import React, { Component } from 'react';
import Slides  from "./components/Carousel";
import Donor  from "./components/Donor";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';

 class App extends Component {
  render() {
    return (
      <div>
        <Slides/>
        <Donor/>
        <Footer/>
      </div>
    )
  }
}

export default App;