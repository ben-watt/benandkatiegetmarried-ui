import React from 'react';
import ReactDOM from 'react-dom';
import css from './map-styles.css';
import mapOptions from './mapOptions.json';

export default class Map extends React.Component {

  componentDidUpdate(prevProps, prevState) {     
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }
  }

  componentDidMount() {
    this.loadMap();
  }
  
  loadMap() {
    const { google } = this.props;
    if (google !== null) {
      const uluru = {lat: 53.506292, lng: -2.3931257};
      mapOptions.center = uluru;
      
      new google.maps.Marker({
        position: uluru,
        map: new google.maps.Map(ReactDOM.findDOMNode(this.refs.map), mapOptions),
        icon:  'https://res.cloudinary.com/d5hbzroitr/image/upload/v1501019327/wedding-couple_4_cm4hie.png'
      });
    }
  }
  render() {
    return (
      <div className={css.setArea}  ref='map'>
        Loading map...
      </div>
    )
  }
}
