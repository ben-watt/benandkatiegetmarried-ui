import React from 'react';
import Header from '../header/Header';
import WhenWhere from '../whenWhere/WhenWhere';
import KeyPeople from '../keyPeople/keyPeople';
import Itinerary from '../itinerary/Itinerary';
import Rsvp from '../rsvp/rsvpView/RsvpMainDisp';
import CommentPage from '../commentPage/CommentPage';
import Accommodations from '../accommodations/accommodations.js';
import DressCode from '../dressCode/dressCode.js';
import Gifts from '../gifts/gifts.js';

import css from './mainPage-styles.css';

import MapContainer from '../googleMaps/MapContainer';
import Nav from '../nav/Nav';

class MainPage extends React.Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount = () => {
        this.props.getPageData();
    }

    render() {
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
}
export default MainPage;


