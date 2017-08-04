import React from 'react';
import css from './header-styles.css';
// import globalCss from '../../../public.global.css'
import scrollFunc from './scrollFunc';


class Header extends React.Component {
    constructor(props){
        super(props);
        this.enterSiteSmoothScroll = this.enterSiteSmoothScroll.bind(this);   
    }    

    enterSiteSmoothScroll() {
		scrollFunc(this.refs.height);
	}
    render() {
        return (
            <div ref={'height'} className={css.header}>
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