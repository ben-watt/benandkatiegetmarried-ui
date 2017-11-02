import React from 'react';  
import MainPage from './mainPage/MainPage';
import LoginPage from './loginPage/LoginPage';
import api from '../api/mockapi';
import { ToastContainer } from 'react-toastify';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loggedIn: false,
            eventDetails : null,
            guestDetails : null
        }
    }  

    componentDidMount = async () => {
        this.getPageData();
    }

    getPageData = async () => {
        try{
            const eventPromise = api.eventDetails();
            const guestPromise = api.getGuests();
            const res = await Promise.all([eventPromise, guestPromise]);

            if(res.every(x => x.status === 200)){
                this.setState({ 
                    loggedIn: true,
                    eventDetails: res[0].data,
                    guestDetails: res[1].data
                });
            }

        } catch(err) {
            console.log(err);
            this.setState({loggedIn : false });
        }
    }

    shouldShowRsvpButton = () => {
        const rsvpAlreadySent = this.state.guestDetails.every(x => x.hasSentRsvp === true);
        return rsvpAlreadySent ? false : true;
    }
       
    handleClick() {
        this.setState(prevState => ({ isToggleOn: !prevState.isToggleOn }));
    }

    render() {
        return (
            <div>
                {
                    (this.state.loggedIn === false) 
                    ? <LoginPage login={() => this.setState({loggedIn: true})} /> 
                    : <MainPage appState={this.state} showRsvp={this.shouldShowRsvpButton()}/>
                }
                <ToastContainer 
                    position="top-right"
                    type="default"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    pauseOnHover/>
            </div>
        )
    }
}

export default App;