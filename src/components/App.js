import React from 'react';  
import MainPage from './mainPage/MainPage';
import LoginPage from './loginPage/LoginPage';
import api from '../api/mockapi';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loggedIn: false,
        }
    }  

    componentDidMount = async () => {
        //Hit endpoint to check if session is active
        try {

            const res = await api.eventDetails()
            if(res.status === 200)
                this.login();

        } catch(err){
            console.log('Unable to login', err);
        }

    }

    login = () => {
        this.setState({ loggedIn: true});
    }
       
    handleClick() {
        this.setState(prevState => ({ isToggleOn: !prevState.isToggleOn }));
    }

    render() {
        return (
            <div>
                {
                    (this.state.loggedIn === false) 
                    ? <LoginPage login={this.login} /> 
                    : <MainPage />
                }
            </div>
        )
    }
}

export default App;