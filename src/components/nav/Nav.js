import React from 'react';
import css from './nav-styles.css';

class Nav extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            show: false,
        }
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
            <div className={css.navbar}>
                <button onClick={this.onClick} className={this.getBtnStyle()}>
                    <svg width='20' height='14'>
                        <path d='M0 2 H20 M0 7 H20 M0 12 H20' stroke='black'/>
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