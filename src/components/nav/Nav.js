import React from 'react';

import SideNav from './sideNav/SideNav';
import NavBar from './navBar/NavBar';

import navItems from './navItems';

class Nav extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            show: false,
        }
        this.sections = navItems;
    }

    onClick = () => {  
        this.setState(prevState => {        
            const show = !prevState.show;
            if(show){
                document.body.classList.add('lock');
            } else {
                document.body.classList.remove('lock');
            }
            return { show: show }
        });
    }

    render() {        
        return (
            <div>
                <SideNav sections={this.sections} 
                         onClick={this.onClick} 
                         show={this.state.show}/>
                <NavBar sections={this.sections} 
                        onClick={this.onClick} 
                        show={this.state.show} 
                        navHeight={this.state.navHeight}/>
            </div>
        )
    }
       
}

export default Nav;