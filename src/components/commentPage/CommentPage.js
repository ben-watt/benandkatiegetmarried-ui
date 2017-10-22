import React from 'react';

import CommentList from './commentList/CommentList';
import CommentInput from './commentInput/CommentInput';
import api from '../../api/mockapi';

import css from './commentPage-styles.css';
import Comment from '../../domainObjects/comment.js'

class CommentPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            comments: []
        }
    }

    componentDidMount = async () => {
        try{
            const res = await api.getComments();

            if(res.status === 200){
                this.setState({
                    comments: res.data
                });
            }

        } catch(err) {
            console.log(err);
        }
    }
    
    createComment = (text, attribution) => {
        const newComment = new Comment(text, attribution);
        this.setState(prev => ({
            comments : prev.comments.concat(newComment)
        }));
    }                              

    render() {
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