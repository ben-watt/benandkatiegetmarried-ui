import React from 'react';
import css from './map-styles.css'
import Map from './Map';

import GoogleApiComponent from './GoogleApiComponent';

export class Container extends React.Component {
  render() {      
    if (!this.props.loaded) {
      return <div>Loading...</div>
    }
    return (
     <div className={css.setArea} >
        <Map google={this.props.google}/>
      </div>
    )
  }
}

export default GoogleApiComponent({
  apiKey: 'AIzaSyC4nSl3jzRKb63bsSh1n7wPVCQFotc-0js'
})(Container)