import React from 'react';

import css from './loginError.css';

class LoginError extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            seeMore: false
        }
    }

    toggleSeeMore = () => {
        this.setState(prev => ({seeMore: !prev.seeMore}));
    }

    render(){
        return ( 
            <div className={css.error}>
                <div>Uh oh! Something went wrong.</div>
                <div onClick={this.toggleSeeMore} className={css.seeMore}>see more</div>
                {this.state.seeMore === true && <div className={css.detail}>{this.props.errorMessage}</div>}
            </div>
        )
    }
}

export default LoginError;