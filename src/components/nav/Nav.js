import React from 'react';
import css from './nav-styles.css';
import { TimelineLite } from 'gsap';

class Nav extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            show: false,
        }
        this.tl = new TimelineLite();
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
        if(this.state.show === true){
            //styles.push('fa-times');
        } else {
            //styles.push('fa-bars');
        }
        return styles.join(' ');
    }

    onClick = () => {  
        this.setState(prevState => {        
            this.animate(); 
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

        this.state.show ? this.tl.reverse() : this.tl.play();
    }

    render() {
        return (
            <div className={css.navbar}>
                <button onClick={this.onClick} className={this.getBtnStyle()}>
                    <svg width='30' height='30'>
                        <path ref={x => this.enterIcon = x } d='M0 2 H20 M0 7 H20 M0 12 H20' stroke='black'/>
                        <path ref={x => this.exitIcon = x} d="m2 2 l8 12 l8 -12" stroke='none' fill='none' />
                    </svg>
                </button>
                <nav className={this.getNavStyles()}>
                </nav>
                <p>One</p>
                <p>Two</p>
                <p>Three</p>
                <div className={this.state.show && css.onShade}></div>
            </div>
        )
    }
       
}

export default Nav;