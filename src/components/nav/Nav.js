import React from 'react';
import smoothScroll from 'smoothscroll';

import SideNav from './sideNav/SideNav';
import NavBar from './navBar/NavBar';
import navItems from './navItems';

class Nav extends React.Component {
    constructor(props){
        super(props);
        this.sections = navItems;
    }

    scroll(selector, options = {seconds: 1000 , upOffset: 0, downOffset: 50}) {
        let element = document.querySelector(selector);
        let elementsRelativePosition = element.getBoundingClientRect().top;
        let scroll = elementsRelativePosition + window.pageYOffset;
        if(elementsRelativePosition > 0){
            smoothScroll(scroll - options.upOffset , options.seconds);
        } else {
            smoothScroll(scroll - options.downOffset , options.seconds);
        }
    }

    render() {        
        return (
            <div>
                <SideNav sections={this.sections} scroll={this.scroll}/>
                <NavBar sections={this.sections} scroll={this.scroll}/>
            </div>
        )
    }
       
}

export default Nav;