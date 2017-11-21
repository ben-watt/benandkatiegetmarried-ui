import React from 'react';
import css from './wedPics-styles.css';

const WedPics = () => {
    return (
        <div id='getInvolved' className={css.container}>
            <div className={css.inner}>
                <h1 className={css.header}>Get Involved </h1>
                <p className={css.subHead}>We would love to see your photos of the day.  
                    Below are the ways you can share your favourites with everyone.</p>
                <div className={[css.pic, css.pol1].join(' ')}></div>
                <div className={[css.pic, css.pol3].join(' ')}></div>
                <div className={[css.pic, css.pol2].join(' ')}></div>

                <div className={css.wedPics}>
                    <h1 className={css.blurb}>WedPics</h1>
                    <div className={[css.logo, css.wedPicsLogo].join(' ')}></div>
                    <ul className={css.list}>
                        <li>1.  Download the WedPics app</li>
                        <li>2.  Press 'Join an Existing wedding'</li>
                        <li>2.  Enter the event ID <b>KatieBen224</b></li>
                        <li>3.  Upload your photos </li>
                    </ul>
                </div>
                <div className={css.socialMedia}>
                    <h1 className={css.blurb}>Social Media</h1>
                    <div className={[css.logo, css.facebook].join(' ')}></div>
                    <div className={[css.logo, css.instagram].join(' ')}></div>
                    <ul className={css.list}>
                        <li>1.  Upload photos as usual</li>
                        <li>2.  Use the hashtag <b>#wattwedding</b></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default WedPics;