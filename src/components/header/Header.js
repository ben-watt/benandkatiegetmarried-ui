import React from 'react';
import css from './header-styles.css';
import scrollFunc from './scrollFunc';
import backgroundHeight from '../common/backgroundHeight.js'


class Header extends React.Component {
    constructor(props){
        super(props);
        this.enterSiteSmoothScroll = this.enterSiteSmoothScroll.bind(this);   
    }    

    // componentDidMount(){
    //     window.addEventListener('load', this.updateDimensions);
    // }

    componentWillUnmount = () => {
        window.removeEventListener('load', this.updateDimensions);
    }
    // updateDimensions = () => {
    //     backgroundHeight(this.backgroundHeight, 0);
    // }

    enterSiteSmoothScroll() {
		scrollFunc(this.backgroundHeight);
    }

    getEventDate() {
        const date = new Date(this.props.eventDate);
        const month = date.toLocaleDateString("en-GB", {month: "2-digit"});
        const day = date.toLocaleDateString("en-GB", {day: "2-digit"});
        return `${day}.${month}.${date.getFullYear()}`
    }

    render() {
        return (
            <div ref={(node) => {this.backgroundHeight = node}} className={css.header}>
                <p className={css.title}> Katie & Ben </p>
                <p className={css.date}>{this.getEventDate()}</p>  
                <div className={css.bird}></div>  
                <div className={css.enterDiv} onClick={this.enterSiteSmoothScroll}>
                    <h5 className={css.enter}>Enter Site</h5>
                    <i className={[css.enter, "fa fa-angle-double-down"].join(' ')} aria-hidden="true"></i>
                </div>
            </div>
        )
    }
}

export default Header;