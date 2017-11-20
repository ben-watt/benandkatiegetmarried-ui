import React from 'react';
import css from './gifts-styles.css';

const Gifts = () => {
    return (
        <div id='gifts' className={css.container}>
            <h1 className={css.heading}>Gifts</h1>
            <div className={css.bow} />
            <div className={css.text}> We are simply grateful for your presence to celebrate the occasion with us! If you would like to get us something, a contribution towards our honeymoon will be much appreicated.</div>
        </div>
    )
}

export default Gifts;