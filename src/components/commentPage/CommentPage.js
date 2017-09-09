import React from 'react';

import CommentList from './commentList/CommentList';
import CommentInput from './commentInput/CommentInput';

import css from './commentPage-styles.css';
import Comment from '../../domainObjects/comment.js'

class CommentPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            comments: []
        }
    }

    createComment = (text, attribution) => {
        const newComment = [new Comment(text, attribution)];
        this.setState(prev => ({
            comments : prev.comments.concat(newComment)
        }));
    }

    render(){
        const activeInput = this.state.activeInput;                                            

        return (        
            <div className={css.container}>
                <div className={css.innerContainer}>        
                    <p className={css.header}>Guest Book</p>
                    <CommentInput defaultState={false} 
                        post={this.createComment}/>
                    <CommentList comments={this.state.comments} />
                </div>
            </div>
        )
    }

}

export default CommentPage;