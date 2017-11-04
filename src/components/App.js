import React from 'react';  
import MainPage from './mainPage/MainPage';
import LoginPage from './loginPage/LoginPage';
import api from '../api/mockapi';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loggedIn: false,
            eventDetails : null,
            guestDetails : null
        }
    }  

    logout = () => {
        try{
            api.logout();
            this.setState({
                loggedIn: false
            });
        } catch(err){
            console.log(err);
            toast.error("Unable to logout at this time");
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
        var guests = this.state.guestDetails;
        return guests === null ? false : guests.every(x => x.hasSentRsvp === true);
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
                    : <MainPage appState={this.state} 
                                showRsvp={this.shouldShowRsvpButton()}
                                logout={this.logout}/>
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