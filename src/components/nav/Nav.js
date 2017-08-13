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

    scroll(selector, seconds = 1000, offset = 50){
        let element = document.querySelector(selector);
        let elementPosition = element.getBoundingClientRect().top;
        let scroll = elementPosition + window.pageYOffset;
        smoothScroll(scroll - offset , seconds);
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