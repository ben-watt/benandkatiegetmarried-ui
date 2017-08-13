import React from 'react';

import css from './navBar-styles.css'

class NavBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            navClass: css.absolute,
            navHeight: 50
        }  
    }

    componentDidMount(){
        window.addEventListener('scroll', this.onScroll);
        this.lastOffset = window.pageYOffset || 0;
    }

    componentDidUnMount(){
        window.removeEventListener('scroll', this.onScroll);
    }

    onScroll = () => {
            const pageOffset = window.pageYOffset;
            const diff = this.lastOffset - pageOffset;
            const speed = 3;

            if(diff > 0 && pageOffset !== 0){
                this.setState((prev) => ({ 
                    navClass: css.fixed, 
                    navHeight: prev.navHeight > 50 ? 50 : prev.navHeight + speed,
                }));
            } else {
                if(pageOffset === 0){
                    this.setState({ navClass: css.absolute, navHeight: 0 });
                }
                
                this.setState((prev) => {
                    let newHeight = prev.navHeight - speed
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
                                onClick={() => this.props.scroll(x.anchor)} 
                                key={i}>{x.name}</div>)
                    }
                </div>    
            </div>
        )
    }
}

export default NavBar;