import React from 'react';
import Header from '../header/Header';
import WhenWhere from '../whenWhere/WhenWhere';
import KeyPeople from '../keyPeople/KeyPeople';
import Itinerary from '../itinerary/Itinerary';
import Rsvp from '../rsvp/rsvpView/RsvpMainDisp';
import CommentPage from '../commentPage/CommentPage';

import css from './mainPage-styles.css';

import MapContainer from '../googleMaps/MapContainer';
import Nav from '../nav/Nav';

class MainPage extends React.Component {
    constructor(props){
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
                        <KeyPeople />
                        <Itinerary />
                        <section id='main' className={css.section70}>Main</section>
                        <div id='map' className={css.section100}>
                            <MapContainer/>
                        </div>            
                        <CommentPage />            
                    </div>
                </div>
        )
    }
}

export default MainPage;


