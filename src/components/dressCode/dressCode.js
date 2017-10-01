import React from 'react';
import css from './dressCode-styles.css';

const DressCode = () => {
    return (
        <div className={css.container}>
            <div className={css.innerContainer}>
                <h1 className={css.head}> What To Wear </h1>
                <div className={css.dress} />
                <div className={css.textArea}> 
                    <h1 className={css.subHead}>The Ladies </h1>
                    <p className={css.text}>A cocktail dress or a long, dressy skirt and top.</p>
                    <h1 className={css.subHead}>The Men </h1>
                    <p className={css.text}>A suit and tie.</p>
                </div>
                <div className={css.suit} />
            </div>
        </div>
    )
}

export default DressCode;