import React from 'react';
import data from './accommodationsData.js'
import Button from '../common/Button.js'
import css from './accommodations-styles.css';

class Accommodations extends React.Component  {

    populate = (val, i) => {
        return (
            <div key={i} className={[data.accommodations[i].class, css.accom].join(' ')}>
                    <p className={css.distance}>{data.accommodations[i].name}</p>
                    <p>Distance:</p><p>{data.accommodations[i].distance}</p>
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
            <div className={css.container}>
            <p className={css.heading}>Accommodations</p>
                <div className={css.innerCont}>
                    {data.accommodations.map(this.populate)}     
                    <div className={css.image}></div>
                </div>
            </div>
        )
    }
}

export default Accommodations;