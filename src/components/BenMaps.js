import React, { Component } from 'react';
import ReactDOM from 'react-dom'

class App extends Component {
  constructor(props){
    super(props);
    this.google = window.google;
    this.output = this.getInitalComponent();
  }
  

  getInitalComponent() {
    return <div ref={(i) => this.node = i} 
                style={{width: '500px', height: '500px'}}>Map here</div>;
  }

  initMap() {
    // Create a map object and specify the DOM element for display.
    new this.google.maps.Map(this.node, {
      center: {lat: -34.397, lng: 150.644},
      scrollwheel: false,
      zoom: 5,
    });
    //return map;
  }

  componentDidMount(){
    console.log(this.node);
    //this.google = window.google;
    this.initMap();
  }

  render() {

    return (
      this.output
    );
  }
}

export default App;