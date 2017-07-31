import React from 'react';
import styles from './header-styles';
import scrollFunc from './scrollFunc';

import Radium from 'radium';

class Header extends React.Component {
	constructor(props){
        super(props);
		this.scrollTo = this.scrollTo.bind(this);
	}

	scrollTo() {
		scrollFunc(this.refs.scroll);
	}
		
	   render() {
        return (
            <div ref='scroll' style={styles.header}>
                <p style={styles.title}> Katie & Ben </p>
                <p style={styles.date}>24.02.2018</p>  
                <div style={styles.enterDiv} onClick={this.scrollTo}>
                    <h5 style={styles.enter}>Enter Site</h5>
                    <i className="fa fa-angle-double-down" aria-hidden="true"></i>
                </div>
            </div>
        )
    }
}

export default Radium(Header);