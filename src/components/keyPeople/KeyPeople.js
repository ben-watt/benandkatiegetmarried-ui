import React from 'react';
import css from './keyPeople-styles.css';

import data from './keyPeopleData.js'
import LazyLoad from 'react-lazy-load';


class KeyPeople extends React.Component   {
    populate = (title, i) => {
       var pictures =  data.info[i].people.map((text, y) => {
            return (
                <div key={y} className={text.col}>
                    <div className={[css.pic, text.picClass].join(' ')}></div>
                    <p className={[css.name, text.nameClass].join(' ')}>{text.name}</p>
                </div>
            )
        })

        return  (
            <div key={i} className={css.container}>
                <div className={css.subhead}>{title.title}</div>
                {pictures}
            </div>
        )
    }

    render() {
    return (
        <div className={css.setArea}>
                <p id='people' className={css.head}> People </p>
               {data.info.map(this.populate)}  
            </div>
    )
    }
}

export default KeyPeople;

{/* <LazyLoad className={css.lazy} offsetVertical={600}> */}