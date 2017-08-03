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
        const styles = ['fa'];
        if(this.state.show === true){
            styles.push('fa-times');
        } else {
            styles.push('fa-bars');
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
  
                <nav className={this.getNavStyles()}></nav>
                <p>One</p>
                <p>Two</p>
                <p>Three</p>
            </div>
        )
    }
       
}

export default Nav;