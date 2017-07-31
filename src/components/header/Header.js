import React from 'react';
import styles from './header-styles';
import scrollFunc from './scrollFunc';

import Radium from 'radium';

class Header extends React.Component {
	constructor(props){
        super(props);
        this.enterSiteSmoothScroll = this.enterSiteSmoothScroll.bind(this);
        this.state = {
            windowHeight: null,
        }
    }    
    componentWillMount() {
        this.setState(prevState => (
            {windowHeight: window.innerHeight}
        ));
    }

    enterSiteSmoothScroll() {
		scrollFunc(this.state.windowHeight);
	}
		
	   render() {
        return (
            <div style={styles.header}>
                <p style={styles.title}> Katie & Ben </p>
                <p style={styles.date}>24.02.2018</p>  
                <div style={styles.enterDiv} onClick={this.enterSiteSmoothScroll}>
                    <h5 style={styles.enter}>Enter Site</h5>
                    <i className="fa fa-angle-double-down" aria-hidden="true"></i>
                </div>
            </div>
        )
    }
}

export default Radium(Header);