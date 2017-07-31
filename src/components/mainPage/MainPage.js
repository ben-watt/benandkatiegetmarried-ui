import React from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header'
import styles from './mainPage-styles';
import Radium from 'radium';
import MapContainer from '../googleMaps/MapContainer';



const MainPage = (props) => {
    return  (
            <div>
                <div style={styles.onShade}></div>
                <nav style={styles.nav}>Nav</nav>
                <div style={styles.container}>
                
                    <Header scrollTo={props.scrollTo}/>
                    <section style={styles.section70}>Main</section>
                     <div style={styles.section100}>
                        <MapContainer/>
                    </div> 
                    <Footer/>
                </div>
            </div>
    )
}

export default Radium(MainPage);

