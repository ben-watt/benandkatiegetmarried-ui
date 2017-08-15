import React from 'react';
import css from './itinerary-styles.css';
import backgroundHeight from '../common/backgroundHeight.js'

class Itinerary extends React.Component {  
    componentDidMount(){
        window.addEventListener('load', this.onLoad);
    }

    onLoad = () => {
        backgroundHeight(this.backgroundHeight, 200)
    }

    render() {
        return (
            <div ref={(node) => {this.backgroundHeight = node}} className={css.setArea}>
                    <div className={css.innerinner}>
                        <h1>Itinerary</h1>
                            <p>2.30pm</p><p> ceremony commences</p>
                            <p>3pm</p><p> arrival drinks</p>
                            <p>4.30pm</p><p> Wedding breakfast commences, nom nom nom. </p>
                            <p>7pm</p><p> evening reception</p>
                            <p>8.15pm</p><p>  cake time and first dance</p>
                            <p>8.30</p><p>  join us on the dance floor, yes that includes you!</p>
                            <p>9.15pm</p><p>  evening buffet served</p>
                            <p>12.30am</p><p>  bar closes</p>
                            <p>1am</p><p> residents bar remains open until we’ve had enough. </p>
                
                </div>
            </div>
        )
    }
}

export default Itinerary;