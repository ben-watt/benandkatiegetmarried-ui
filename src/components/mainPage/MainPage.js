import React from 'react';
import Header from '../header/Header';
import WhenWhere from '../whenWhere/WhenWhere';
import KeyPeople from '../keyPeople/KeyPeople';
import Itinerary from '../itinerary/Itinerary';
import Rsvp from '../rsvp/rsvpView/RsvpMainDisp';
import CommentPage from '../commentPage/CommentPage';
import Accommodations from '../accommodations/accommodations.js';
import DressCode from '../dressCode/dressCode.js';
import Gifts from '../gifts/gifts.js';

import css from './mainPage-styles.css';

import MapContainer from '../googleMaps/MapContainer';
import Nav from '../nav/Nav';

import LazyLoad from 'react-lazy-load';


const MainPage = (props) => {
    return  (
            <div>
            <Nav />
            <Rsvp />
                <div className={css.container}>             
                    <Header/>
                    <WhenWhere />
                    <Accommodations />
                    <div id='map' className={css.map}>
                        <MapContainer/>
                    </div>     
                    <KeyPeople />
                    <Itinerary /> 
                    <DressCode />      
                    <Gifts />
                    <CommentPage />            
                </div>
            </div>
    )
}

export default MainPage;


