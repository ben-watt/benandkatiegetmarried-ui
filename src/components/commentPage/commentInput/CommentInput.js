import React from 'react';
import Picker from 'react-emojipicker';
import { toast } from 'react-toastify';

import Button from '../../common/Button';
import css from './commentInput.css';
import Tag from '../../common/Tag';

class CommentInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {   
            guests: this.props.appState.guestDetails || [],
            activeInput: props.defaultState,
            text: props.text || '',
            attribution: this.props.appState.guestDetails || [],
            showPicker: false
        }
    }

    inputChange = (e) => {
        this.setState({
            text: e.target.value
        });
    }

    toggleInput = (val) => { 
        if(val !== this.state.activeInput){
            this.setState(prev => ({
                activeInput: val, 
                showPicker: false,
                attribution: prev.guests
            }));
        }
    } 

    componentDidMount = () => {
        document.addEventListener("mousedown", this.clickOutside);
    }

    componentWillUnmount = () => {
        document.removeEventListener("mousedown", this.clickOutside);
    }

    componentDidUpdate = () => {
        this.input && this.input.focus();
    }

    clickOutside = (e) => {
        if(this.container && !this.container.contains(e.target)){
            this.toggleInput(false);
        }
    }
    
    addEmoji = (emoji) => {
        console.log(emoji);
        this.setState(prev => ({
            text: prev.text.length > 1 ? prev.text.concat(emoji.unicode) : prev.text.concat(' ' + emoji.unicode),
            showPicker: false,
        }));
    }

    togglePicker = (val) => {
        this.setState(prev => ({
            showPicker: val ? val : !prev.showPicker
        }));
    }

    deleteGuest = (id) => {
        if(this.state.attribution.length === 1){
            toast.info("You must have at least one person against the comment to post");
            return;
        }
        this.setState(prev => ({
            attribution: prev.attribution.filter(g => g.id !== id)
        }));
    }

    post = () => {
        this.props.post(this.state.text, this.state.attribution)
        this.setState(prev => ({
            activeInput: false,
            text: [],
            attribution: prev.guests,
            pickerVisible: false
        }))
    }

    render() { 
    const inputClasses = this.state.activeInput ? [css.inputComment, css.active] : [css.inputComment];
    const showPicker = this.state.showPicker ? [css.picker, css.show] : [css.picker];
    const input = this.state.activeInput && <textarea className={css.input}
                                                    ref={(i) => this.input = i}
                                                    onChange={this.inputChange}
                                                    onFocus={this.focus}
                                                    value={ this.state.text}></textarea>
        return (
            <div ref={i => this.container = i} >
                <div className={inputClasses.join(' ')} 
                    onClick={() => this.toggleInput(true)}>
                    <div className={css.textarea}>
                        <p>Leave a note</p>
                        {input}
                    </div>
                    <div className={css.options}>
                        <i className={['fa fa-smile-o', css.emoji].join(' ')} onClick={this.togglePicker}/>
                        <div>                
                            {this.state.attribution.map(g => <Tag onClick={() => this.deleteGuest(g.id)}>{`${g.firstName} ${g.lastName}`}</Tag>)}
                        </div>
                        <Button className={css.post} 
                                onClick={this.post} 
                                text='Post'/> 
                    </div>             
                </div>
                <div className={showPicker.join(' ')}>
                    <Picker onEmojiSelected={this.addEmoji}/>
                </div>
            </div>
        )
    }
}

export default CommentInput;