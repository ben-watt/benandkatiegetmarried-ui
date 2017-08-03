import React from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import WhenWhere from '../whenWhere/WhenWhere';
import css from './mainPage-styles.css';

import MapContainer from '../googleMaps/MapContainer';
import Nav from '../nav/Nav';

const MainPage = (props) => {
    return  (
            <div>
                <div className={css.onShade}></div>
                <Nav />
                <div className={css.container}>
                    <Header />
                    <WhenWhere />
                    <section className={css.section70}>Main</section>
                        <div className={css.section100}>
                            <MapContainer/>
                        </div>                     
                    <Footer />
                </div>
            </div>
    )
}

export default MainPage;

