import React from 'react';
import css from './header-styles.css';
import scrollFunc from './scrollFunc';


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
            <div className={css.header}>
                <p className={css.title}> Katie & Ben </p>
                <p className={css.date}>24.02.2018</p>  
                <div className={css.enterDiv} onClick={this.enterSiteSmoothScroll}>
                    <h5 className={css.enter}>Enter Site</h5>
                    <i className="fa fa-angle-double-down" aria-hidden="true"></i>
                </div>
            </div>
        )
    }
}

export default Header;