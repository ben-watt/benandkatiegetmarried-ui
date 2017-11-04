import React from 'react';

import css from './navBar-styles.css'

class NavBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            navClass: css.absolute,
            navHeight: 50,
        }  
        this.speed = 3;
        this.runningCompleteScroll = false;
        this.snapNav = setInterval(() => {
            if(!this.navBarInEndState() 
                && this.runningCompleteScroll === false
                && this.lastCallToOnScroll < Date.now() - 200){
                this.completeScroll();
            }
        }, 100);   
    }

    navBarInEndState() {
        return this.state.navHeight >= 50 || this.state.navHeight <= 0 ? true : false;
    }

    componentDidMount(){
        window.addEventListener('scroll', this.onScroll);
        this.lastOffset = window.pageYOffset || 0;
    }

    componentDidUpdate(){
        if(this.navBarInEndState()){
            clearInterval(this.snapScroll);
            this.runningCompleteScroll = false;
        }
    }

    componentDidUnMount(){
        window.removeEventListener('scroll', this.onScroll);
    }

    decrementScrollBar = () => {
        this.setState((prev) => {
            return { navHeight: prev.navHeight + 1}
        });
    }

    completeScroll = () => {
        this.runningCompleteScroll = true;
        this.snapScroll = setInterval(this.decrementScrollBar, 8);
    }

    onScroll = () => {
        this.lastCallToOnScroll = Date.now();          
        const pageOffset = window.pageYOffset;
        const diff = this.lastOffset - pageOffset;

        if(diff > 0 && pageOffset !== 0){
            this.setState((prev) => ({ 
                navClass: css.fixed, 
                navHeight: prev.navHeight > 50 ? 50 : prev.navHeight + this.speed,
            }));
        } else {
            if(pageOffset === 0){
                this.setState({ navClass: css.absolute, navHeight: 0 });
            }
            
            this.setState((prev) => {
                let newHeight = prev.navHeight - this.speed
                if(prev.navHeight < 0)
                    newHeight = 0;
                if(window.pageYOffset === 0)
                    newHeight = 50;              

                return {navHeight: newHeight}
            });            
        }
        this.lastOffset = pageOffset;
    }


    render(){
        const navBarItems = (this.state.navHeight > 50 || window.pageYOffset === 0) ? 0 : this.state.navHeight - 50;
        const navBarOpacity = window.pageYOffset < 50 ? 1 : this.state.navHeight * 2 / 100;

        return (
            <div className={[css.navbar, this.state.navClass].join(' ')} 
                 style={{ height: this.state.navHeight}}>
                <div style={{opacity: navBarOpacity, transform: 'translate(0px, '+ navBarItems +'px)'}}>
                    {
                        this.props.sections.map((x, i) => 
                            <div className={css.navItem} 
                                onClick={() => { x.name !== "Logout" ? this.props.scroll(x.anchor, x.options) : this.props.logout();}}
                                key={i}>{x.name}</div>)
                    }
                </div>    
            </div>
        )
    }
}

export default NavBar;