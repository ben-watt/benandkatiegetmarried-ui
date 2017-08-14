import React from 'react';
import css from './keyPeople-styles.css';

const KeyPeople = () => {
    return (
        <div className={css.setArea}>

        
        
            <div className={css.container}>
                <p id='people' className={css.head}> People </p>
                
                <p className={css.subhead}> The Parents </p>
                <div className={[css.pic, css.ericPic].join(' ')}></div>
                <div className={[css.pic, css.janinePic].join(' ')}></div>
                <div className={[css.pic, css.davidPic].join(' ')}></div>

                <p className={[css.ericRow, css.name].join(' ')}> Eric Vallance</p>
                <p className={[css.janineRow, css.name].join(' ')}>Janine Watt</p>
                <p className={[css.davidRow, css.name].join(' ')}>David Watt</p>


                <p className={css.subhead}> The Bridesmaids </p>
                <div className={[css.pic, css.sopPic].join(' ')}></div>
                <div className={[css.pic, css.catrionaPic].join(' ')}></div>
                <div className={[css.pic, css.trishPic].join(' ')}></div>

                <p className={[css.sopRow, css.name].join(' ')}>Sophie Vallance</p>
                <p className={[css.catrionaRow, css.name].join(' ')} >Catriona Middleton</p>
                <p className={[css.trishRow, css.name].join(' ')} >Trish Mistry</p>


                <p className={css.subhead}> The Bestmen </p>
                <div className={[css.pic, css.scottPic].join(' ')}></div>
                <div className={[css.pic, css.samPic].join(' ')}></div>

                <p className={[css.samRow, css.name].join(' ')}> Sam Watt</p>
                <p className={[css.scottRow, css.name].join(' ')}>Scott Halls</p>   
            </div>
        </div>
    )
}

export default KeyPeople;
//people
// parents
//david janine ericPic

// the bridesmaids
// sop trish cat

// the bestmen
//scott sam


