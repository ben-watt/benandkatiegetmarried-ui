import React from 'react';
import NativeListener from 'react-native-listener';

import Button from '../common/Button'

import css from './commentPage-styles.css';

class CommentPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            activeInput: false,
            comments: []
        }
    }

    toggleInput = (val, e) => { 
        e.stopPropagation();
        this.setState(prev => ({
            activeInput: val 
        }));
    }  
    
    componentDidUpdate = () => {
        this.state.activeInput && this.input.focus();
    }

    render(){
        const activeInput = this.state.activeInput;
        const inputClasses = activeInput ? [css.inputComment, css.active] : [css.inputComment];
        const input = activeInput && <div className={css.input} ref={(i) => this.input = i} contentEditable></div>

        return (        
            <div className={css.container} onClick={(e) => this.toggleInput(false, e)}>
                <div className={css.innerContainer}>        
                <p className={css.header}>Comments</p>
                        <div className={inputClasses.join(' ')} onClick={(e) => this.toggleInput(true, e)}>
                            <div className={css.textarea}>
                                <p>Leave a note</p>
                                {input}
                            </div>
                            <Button className={css.post} text="Post" />
                        </div>
                    <div className={css.comment}>
                        <p>This is a really really really long comment. It's got lots of nice things
                        to say about us in it. Something funny, sweet etc. WAHOOOOOOOOOOO WEDDING!</p>
                    </div>
                    <div className={css.comment}>
                        <p>This is a really really really long comment. It's got lots of nice things
                        to say about us in it. Something funny, sweet etc. WAHOOOOOOOOOOO WEDDING!</p>
                    </div>
                </div>
            </div>
        )
    }

}

export default CommentPage;