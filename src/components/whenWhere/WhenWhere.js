import React from 'react';
import css from './whenWhere-styles.css';
import Button from '../common/Button.js';

class WhenWhere extends React.Component {
    constructor(props){
        super(props);
        this.state = {value: 'coconut'};
        this.handleChange = this.handleChange.bind(this);
    }    

    handleChange(event) {
    this.setState({value: event.target.value});
  }

    render() {
        const button = {
             gridColumn: '2/5',
        }

        return (
            <div className={css.setArea}>
                <div className={css.container}>
                    <div className={[css.katiePic, css.pic].join(' ')}> </div>
                    <p className={[css.ampersand].join(' ')}>& </p>
                    <div className={[css.benPic, css.pic].join(' ')}></div> 
                    <h1 className={[css.katieHeading, css.headings].join(' ')}>Katie</h1>
                    <h1 className={[css.benHeading, css.headings].join(' ')}>Ben</h1>

                     <h2 className={css.statement}>Are getting married</h2>
                      <p className={css.invite}>And we would love for you to celebrate with us...</p>

                    <h1 className={[css.headings, css.details].join(' ')}><u>WHEN</u></h1>
                    <p className={css.text}>The 24th of February 2018, at 2.30 in the afternoon.</p>
                    <Button text={'Add to Calendar'} style={button}/>

                    <div className={css.border}></div>

                    <h1 className={[css.headings, css.details].join(' ')}><u>WHERE</u></h1>
                    <p className={[css.text].join(' ')}>Worsley Park Marriott Hotel & Country Club, Manchester M28 2QT</p>
                     <Button text={'Find on Map'} style={button} />
                </div>

        <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
        </select>
            </div>
        )
    }
}

export default WhenWhere;