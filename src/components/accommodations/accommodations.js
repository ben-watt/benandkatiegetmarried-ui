import React from 'react';
import data from './accommodationsData.js'
import Button from '../common/Button.js'
import css from './accommodations-styles.css';

import LazyLoad from 'react-lazy-load';


class Accommodations extends React.Component  {

    populate = (val, i) => {
        return (
            <div key={i} className={[data.accommodations[i].class, css.accom].join(' ')}>
            <LazyLoad  offsetVertical={200}>
                <div className={[data.accommodations[i].image, css.image].join(' ')}>
                        <p className={css.name}>{data.accommodations[i].name}</p>
                </div>
            </LazyLoad>
                    <p className={[css.distanceHead].join(' ')}>  Distance from Venue: </p>  
                    <p className={[css.distance, css.miles].join(' ')}>  {data.accommodations[i].distance} </p>             
                    <Button text={'Book'} onClick={()=>{this.handleClick(i)}} className={css.button}/>

            </div>    
        )
    }

    handleClick = (i) => {
        var link = data.accommodations[i].link;
        window.open(link,'_blank');
    }

    render () {
        return (
            <div id='accommodations' className={css.container}>
                        <p className={css.heading}>Accommodation</p>
                        <div className={css.innerCont}>
                            {data.accommodations.map(this.populate)}     
                        </div>
            </div>
           
        )
    }
}

export default Accommodations;