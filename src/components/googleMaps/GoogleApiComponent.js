import React from 'react'
import ReactDOM from 'react-dom'

import cache from './ScriptCache'
import GoogleApi from './GoogleApi'

const defaultMapConfig = {}
export const wrapper = (options) => (WrappedComponent) => {
  const apiKey = options.apiKey;
  const libraries = options.libraries || ['places'];

  class Wrapper extends React.Component {
    constructor(props, context) {
      super(props, context);
      this.state = {
        loaded: false,
        map: null,
        google: null
      }
    }

    componentDidMount() {
      this.scriptCache.google.onLoad((err, tag) => {
          const maps = window.google.maps;
          const mapRef = this.refs.map;
  
          let mapConfig = Object.assign({}, defaultMapConfig, {
            center: new maps.LatLng(this.props.lat, this.props.lng), 
            zoom: this.props.zoom
          })
  
          this.setState({
            loaded: true,
            map: new maps.Map(ReactDOM.findDOMNode(mapRef), mapConfig),
            google: window.google
          })
      });
    }

    componentWillMount() {
      this.scriptCache = cache({
        google: GoogleApi({
          apiKey: apiKey,
          libraries: libraries
        })
      });
    }

    render() {
      const props = Object.assign({}, this.props, {
        loaded: this.state.loaded,
        map: this.state.map,
        google: this.state.google,
        mapComponent: this.refs.map
      })

      const style = {
          width: '100%',
          height: '100%',
      }
      return (
        <div style={style}>
          <WrappedComponent {...props} />
          <div ref='map' />
        </div>
      )
    }
  }

  return Wrapper;
}

export default wrapper;