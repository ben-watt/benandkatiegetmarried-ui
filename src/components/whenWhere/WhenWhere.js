import React from 'react';
import css from './whenWhere-styles.css';
// import css from'./styles.css';

class WhenWhere extends React.Component {
    constructor(props){
        super(props);
    }    

    render() {
        return (
            <div className={css.setArea}>
                <div className={css.container}>
                    <p className={[css.katiePic, css.pic].join(' ')}> </p>
                    <p className={[css.ampersand].join(' ')}>& </p>
                    <p className={[css.benPic, css.pic].join(' ')}></p> 

                    <h1 className={[css.katieHeading, css.headings].join(' ')}>Katie</h1>
                    <h1 className={[css.benHeading, css.headings].join(' ')}>Ben</h1>

                     <h2 className={css.statement}>Are getting married</h2>

                      <p className={css.invite}>And we would love for you to celebrate with us...</p>

                    <h1 className={[css.headings, css.details].join(' ')}><u>WHEN</u></h1>
                    <p className={css.text}>The 24th of February 2018, at 2.30 in the afternoon.</p>
                    <button type="button" className={css.button}> Add to Calendar</button>

                    <div className={css.border}></div>

                    <h1 className={[css.headings, css.details].join(' ')}><u>WHERE</u></h1>
                    <p className={[css.text].join(' ')}>Worsley Park Marriott Hotel & Country Club, Manchester M28 2QT</p>
                     <button type="button" className={[css.button].join(' ')}>Find on map</button>

                 
                </div>
            </div>
     
        )
    }
}

export default WhenWhere;

//  <h1 className={css.headings}>Ben</h1>
//                     <h1 className={[css.columnAlign, css.headings].join(' ')}>Katie</h1>

//                     <h2 className={css.statement}>are getting married</h2>
//                     <p className={css.invite}>...and we would love for you to celebrate with us</p>

//                     <h1 className={css.headings}><u>WHEN</u></h1>
//                     <h1 className={[css.headings, css.columnAlign].join(' ')}><u>WHERE</u></h1>

//                     <p className={css.text}>24th February, 2018, at 2.30 in the afternoon</p>
//                     <p className={[css.text, css.columnAlign].join(' ')}>Worsley Park Marriott Hotel & Country Club</p>

//                     <button type="button" className={css.button}> Add to Calendar</button>
//                     <button type="button" className={[css.button, css.columnAlign].join(' ')}>Find on map</button>
//                 </div>