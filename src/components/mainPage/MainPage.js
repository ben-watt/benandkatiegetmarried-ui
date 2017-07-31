import React from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import css from './mainPage-styles.css';

import MapContainer from '../googleMaps/MapContainer';



const MainPage = (props) => {
    return  (
            <div>
                <div className={css.onShade}></div>
                <nav className={css.nav}>Nav</nav>
                <div className={css.container}>
                    <Header />
                    <section id='section2' className={css.section70}>Main</section>
                     <div className={css.section100}>
                        <MapContainer/>
                    </div>                     
                    <Footer />
                </div>
            </div>
    )
}

export default MainPage;

