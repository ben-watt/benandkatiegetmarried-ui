import React from 'react';
import Header from '../header/Header';
import WhenWhere from '../whenWhere/WhenWhere';
import KeyPeople from '../keyPeople/KeyPeople';
import Itinerary from '../itinerary/Itinerary';
import Rsvp from '../rsvp/rsvpView/RsvpMainDisp';
import CommentPage from '../commentPage/CommentPage';
import Accommodations from '../accommodations/accommodations.js';

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
                    {/* <div className={css.accommodation}>
                        <LazyLoad  offsetVertical={0}> */}
                            <Accommodations />
                        {/* </LazyLoad>
                    </div> */}
                    <div id='map' className={css.map}>
                        <MapContainer/>
                    </div>     
                    <KeyPeople />
                    <Itinerary />       
                    <CommentPage />            
                </div>
            </div>
    )
}

export default MainPage;


