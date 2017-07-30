import React from 'react';
import styles from '../mainPage/mainPage-styles';

import Map from './Map';

import GoogleApiComponent from './GoogleApiComponent';

export class Container extends React.Component {
  render() {
    const style = {
            width: '100%',
            height: '100%',
        }
      
    if (!this.props.loaded) {
      return <div>Loading...</div>
    }
    return (
     <div style={style}>
        <Map google={this.props.google}/>
      </div>
    )
  }
}

export default GoogleApiComponent({
  apiKey: 'AIzaSyC4nSl3jzRKb63bsSh1n7wPVCQFotc-0js'
})(Container)