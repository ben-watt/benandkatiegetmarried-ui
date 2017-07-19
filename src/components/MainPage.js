import React from 'react';
import styles from './MainPage-styles';

const MainPage = () => {
    return  (
        <div>
            <div style={styles.onShade}></div>
            <nav style={styles.nav}>Nav</nav>
            <div style={styles.container}>
                <header style={styles.header}>Header</header>
                <section style={styles.section}>Main</section>
                <footer style={styles.footer}>Footer</footer>
            </div>
        </div>
    )
}

export default MainPage;