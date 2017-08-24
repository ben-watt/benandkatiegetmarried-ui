import React from 'react';
import css from './header-styles.css';
import scrollFunc from './scrollFunc';
import backgroundHeight from '../common/backgroundHeight.js'


class Header extends React.Component {
    constructor(props){
        super(props);
        this.enterSiteSmoothScroll = this.enterSiteSmoothScroll.bind(this);   
    }    

    componentDidMount(){
        window.addEventListener('load', this.onLoad);
    }

    onLoad = () => {
        backgroundHeight(this.backgroundHeight, 0);
    }

    enterSiteSmoothScroll() {
		scrollFunc(this.backgroundHeight);
    }

    render() {
        return (
            <div ref={(node) => {this.backgroundHeight = node}} className={css.header}>
                <p className={css.title}> Katie & Ben </p>
                <p className={css.date}>24.02.2018</p>  
                <div className={css.enterDiv} onClick={this.enterSiteSmoothScroll}>
                    <h5 className={css.enter}>Enter Site</h5>
                    <i className={[css.enter, "fa fa-angle-double-down"].join(' ')} aria-hidden="true"></i>
                </div>
            </div>
        )
    }
}

export default Header;