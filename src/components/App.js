import React from 'react';  
import MainPage from './mainPage/MainPage';
import LoginPage from './loginPage/LoginPage';


class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loggedIn: true,
        }
    }    
   
    handleClick() {
    this.setState(prevState => ({ isToggleOn: !prevState.isToggleOn }));
  }

    render() {
        return (
            <div>
                {(this.state.loggedIn === false) 
                    ? <LoginPage /> 
                    : <MainPage />}
            </div>
        )
    }
}

export default App;