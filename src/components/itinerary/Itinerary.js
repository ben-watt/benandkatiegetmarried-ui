import React from 'react';
import css from './itinerary-styles.css';
import backgroundHeight from '../common/backgroundHeight.js'
import restaurant from './images/restaurant.svg';
import data from './itinerary-data.js';

class Itinerary extends React.Component {  
    componentDidMount(){
        window.addEventListener('load', this.onLoad);
    }

    onLoad = () => {
        var addOn = this.backgroundHeight.innerHeight;
        backgroundHeight(this.backgroundHeight, addOn)
    }

    doThis = (val) => {
        return (
            <div key={val.time} className={css.inner}>
                <p className={css.time}>{val.time}</p>
                <p className={css.text}>{val.text}</p>
            </div>
        )
    }

    render() {
        return (
            <div id='itinerary' ref={(node) => {this.backgroundHeight = node}} className={css.setArea}>
                    <div className={css.innerinner} >
                        <h2 className={css.heading}>Itinerary</h2>
                        {data.times.map(this.doThis)}
                     </div>
            </div>
        )
    }
}

export default Itinerary;
