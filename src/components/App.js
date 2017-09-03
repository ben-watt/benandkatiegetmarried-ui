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
        // try{
        //     const res = await api.eventDetails();
        //     if(res.status === 200)
        //         this.login(true);
        // } catch(err) {
        //     this.login(false);
        // }
    }

    login = (state) => {
        this.setState({ loggedIn: state});
    }
       
    handleClick() {
        this.setState(prevState => ({ isToggleOn: !prevState.isToggleOn }));
    }

    render() {
        return (
            <div>
                {
                    (this.state.loggedIn === false) 
                    ? <LoginPage login={() => this.login(true)} /> 
                    : <MainPage />
                }
            </div>
        )
    }
}

export default App;