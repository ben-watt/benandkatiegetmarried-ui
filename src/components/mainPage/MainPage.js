import React from 'react';
import Header from '../header/Header';
import WhenWhere from '../whenWhere/WhenWhere';
import KeyPeople from '../keyPeople/keyPeople';
import Itinerary from '../itinerary/Itinerary';
import Rsvp from '../RsvpNew/rsvpButton/RsvpButton';
//import BenMap from '../BenMaps.js';

import CommentPage from '../commentPage/CommentPage';
import Accommodations from '../accommodations/accommodations.js';
import DressCode from '../dressCode/dressCode.js';
import Gifts from '../gifts/gifts.js';

import css from './mainPage-styles.css';

import MapContainer from '../googleMaps/MapContainer';
import Nav from '../nav/Nav';

class MainPage extends React.Component {
    render() {
        let startTime = this.props.appState.eventDetails && this.props.appState.eventDetails.startTime;
        return  (
                <div>
                <Nav logout={this.props.logout}/>
                {this.props.showRsvp && <Rsvp guestDetails={this.props.appState.guestDetails} />}
                    <div className={css.container}>             
                        <Header eventDate={startTime}/>
                        <WhenWhere eventDate={startTime} inviteType={this.props.appState.inviteType}/>
                        <Accommodations />
                        <div id='map' className={css.map}>
                            <MapContainer />
                        </div>     
                        <KeyPeople />
                        <Itinerary inviteType={this.props.appState.inviteType}/> 
                        <DressCode />
                        <Gifts />      
                        <CommentPage appState={this.props.appState}/>             
                    </div>
                </div>
        )
    
    }
}
export default MainPage;


