import React from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header'
import styles from './mainPage-styles';
import MapContainer from '../googleMaps/MapContainer';



const MainPage = () => {
    return  (
            <div>
                <div style={styles.onShade}></div>
                <nav style={styles.nav}>Nav</nav>
                <div style={styles.container}>
                
                    <Header />
                    <section id='section2' style={styles.section70}>Main</section>
                     <div style={styles.section100}>
                        <MapContainer />
                    </div> 
                    <Footer/>
                </div>
            </div>
    )
}

export default MainPage;

