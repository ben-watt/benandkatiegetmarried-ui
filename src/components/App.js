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
    this.setState(prevState => (
        { isToggleOn: !prevState.isToggleOn
        }));
  }

    render() {
        if(this.state.loggedIn === true){
            return <MainPage />
        }
        return <LoginPage /> 
    }
}

export default App;