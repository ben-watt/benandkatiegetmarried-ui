import React from 'react';
import styles from './MainPage-styles';
import Footer from './Footer';
import Radium from 'radium';
import MapContainer from './googleMaps/MapContainer';



const MainPage = () => {
    return  (
            <div>
                <div style={styles.onShade}></div>
                <nav style={styles.nav}>Nav</nav>
                <div style={styles.container}>
                    <header style={styles.header}>Header</header>
                     <div style={styles.section100}>
                        <MapContainer />
                    </div> 
                    <section style={styles.section70}>Main</section>
                    <Footer/>
                </div>
            </div>
    )
}

export default Radium(MainPage);

