import React from 'react';
import css from './sideNavStyles.css';
import templo from './images/Templo_de_Debod_in_Madrid_small.jpg';

import { TimelineLite } from 'gsap';

class SideNav extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            show: false,
        }
    }

    componentDidMount(){
        this.tl = new TimelineLite({ paused: true })
        .to(this.enterIcon, 0.3 , { rotation: 360, transformOrigin: '50% 50%'})
        .to(this.enterIcon, 0.1, { stroke: 'none'}, '=-0.1')
        .to(this.exitIcon, 0.3, { rotation: 450, transformOrigin: '50% 50%'} ,'=-0.25')
        .to(this.exitIcon, 0.1, { stroke: 'black'}, '=-0.1');
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

    getNavItems = () => {
        const items = this.props.sections.map((x, i) => 
        <a key={i} 
        onClick={() => { x.name !== "Logout" ? this.props.scroll(x.anchor, x.options) : this.props.logout();}}>
            <div className={css.navItem}>
                <i className={[x.icon, css.icon].join(' ')}></i>
                <span>{x.name}</span>
            </div>
        </a>
        )
        return items;
    }

    onClick = () => { 
        this.state.show ? this.tl.reverse(0) : this.tl.play();

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

    render () {
        return (
        <div>
            <button className={this.getBtnStyle()} onClick={this.onClick}>
                    <svg width='30' height='20'>
                        <g transform='translate(0,2)'>
                            <path ref={x => this.enterIcon = x } d='M0 2 H20 M0 7 H20 M0 12 H20' stroke='black'/>
                            <path ref={x => this.exitIcon = x} d="m2 2 l8 12 l8 -12" stroke='none' fill='none' />
                        </g>
                    </svg>
                </button>
            <nav className={this.getNavStyles()}>
                <img className={css.image} alt='blah' src={templo}/>
                {this.getNavItems()}
            </nav>
            <div className={this.state.show && css.onShade} onClick={this.onClick}></div>
        </div>
    )
    } 
}

export default SideNav;