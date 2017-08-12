import React from 'react';

import SideNav from './sideNav/SideNav';
import NavBar from './navBar/NavBar';

class Nav extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            show: false,
        }
        this.sections = ['One', 'Two', 'Three']
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
                <SideNav onClick={this.onClick} show={this.state.show}>
                    {this.sections}
                </SideNav>   
                <NavBar onClick={this.onClick} show={this.state.show} navHeight={this.state.navHeight}>
                    {this.sections}
                </NavBar>
            </div>
        )
    }
       
}

export default Nav;