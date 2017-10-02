import React from 'react';
import css from './dressCode-styles.css';

const DressCode = () => {
    return (
        <div id='dressCode' className={css.container}>
            <div className={css.innerContainer}>
                <h1 className={css.head}> What To Wear </h1>
                <div className={css.dress} />
                <div className={css.suit} />
              
                   
                <h1 className={[css.subHead, css.ladies].join(' ')}>The Ladies </h1>
                <p className={[css.text, css.ladies].join(' ')}>A cocktail dress or a dressy skirt and top.</p>
                
                <h1 className={[css.subHead, css.men].join(' ')}>The Gentlemen </h1>
                <p className={[css.text, css.men].join(' ')}>A smart suit and tie, color can be dark or light.</p>
              
           
            </div>
        </div>
    )
}

export default DressCode;