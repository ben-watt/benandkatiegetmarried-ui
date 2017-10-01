import React from 'react';
import css from './dressCode-styles.css';

const DressCode = () => {
    return (
        <div className={css.container}>
            <div className={css.innerContainer}>
                <h1 className={css.head}> What To Wear </h1>
                <div className={css.dress} />
              
                    <div className={css.textArea}>
                        <h1 className={[css.subHead, css.ladies].join(' ')}>The Ladies </h1>
                        <p className={[css.text, css.ladies].join(' ')}>A cocktail dress or a long, dressy skirt and top.</p>
                        <h1 className={[css.subHead, css.men].join(' ')}>The Men </h1>
                        <p className={[css.text, css.men].join(' ')}>A smart suit and tie.</p>
                    </div>
           
                <div className={css.suit} />
            </div>
        </div>
    )
}

export default DressCode;