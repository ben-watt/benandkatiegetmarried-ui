import React from 'react';
import css from './gifts-styles.css';

const Gifts = () => {
    return (
        <div id='gifts' className={css.container}>
            <div className={css.rule} />
            <h1 className={css.heading}>Gifts</h1>
            <div className={css.text}> We are simply greatful for your presence to celebrate the occasion with us! If you would like to get us something, we will be grateful for a small cash donation towards our honeymoon.</div>
        </div>
    )
}

export default Gifts;