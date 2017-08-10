import React from 'react';
import css from './nav-styles.css';
import { TimelineLite } from 'gsap';

class Nav extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            show: false,
            navClass: css.absolute,
            navHeight: 0
        }
        this.tl = new TimelineLite();
        this.lastOffset = 0;
    }

    getNavStyles = () => {
        const styles = [css.nav];
        if(this.state.show === true){
            styles.push(css.show);
        }
        return styles.join(' ');
    }

    getBtnStyle = () => {
        const styles = [css.btn];
        return styles.join(' ');
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

        if(diff > 0 && pageOffset !== 0){
            this.setState((prev) => ({ 
                navClass: css.fixed, 
                navHeight: prev.navHeight > 50 ? 50 : prev.navHeight + 2,
            }));
        } else {
            if(pageOffset === 0){
                this.setState({ navClass: css.absolute, navHeight: 0 });
            }
            
            this.setState((prev) => ({ 
                navHeight: prev.navHeight < 0 ? 0 : prev.navHeight - 2,
            }));            
        }
        this.lastOffset = pageOffset;
    }

    onClick = () => {  
        console.log('click');
        this.animate(); 
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

    animate = () => {

        this.tl.to(this.enterIcon, 0.3 , { rotation: 360, transformOrigin: '50% 50%'})
        .to(this.enterIcon, 0.1, { stroke: 'none'}, '=-0.1')
        .to(this.exitIcon, 0.3, { rotation: 450, transformOrigin: '50% 50%'} ,'=-0.25')
        .to(this.exitIcon, 0.1, { stroke: 'black'}, '=-0.1');

        this.state.show ? this.tl.reverse(0.3) : this.tl.play();
    }

    render() {
        console.log(this.state.navHeight)
        const navBarItems = (this.state.navHeight > 50 || window.pageYOffset === 0) ? 0 : this.state.navHeight - 50;
        const navBarOpacity = window.pageYOffset < 50 ? 1 : this.state.navHeight * 2 / 100;
        
        return (
            <div className={[css.navbar, this.state.navClass].join(' ')} style={{height: this.state.navHeight}}>
                <button onClick={this.onClick} className={this.getBtnStyle()}>
                    <svg width='30' height='30'>
                        <path ref={x => this.enterIcon = x } d='M0 2 H20 M0 7 H20 M0 12 H20' stroke='black'/>
                        <path ref={x => this.exitIcon = x} d="m2 2 l8 12 l8 -12" stroke='none' fill='none' />
                    </svg>
                </button>
                <nav className={this.getNavStyles()}>
                </nav>
                <div style={{opacity: navBarOpacity, transform: 'translate(0px, '+ navBarItems +'px)'}}>
                    <p>One</p>
                    <p>Two</p>
                    <p>Three</p>
                </div>
                <div onClick={this.onClick} className={this.state.show && css.onShade}></div>
            </div>
        )
    }
       
}

export default Nav;