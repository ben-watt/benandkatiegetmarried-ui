import React from 'react';

import CommentList from './commentList/CommentList';
import CommentInput from './commentInput/CommentInput';
import api from '../../api/mockapi';

import css from './commentPage-styles.css';
import Comment from './comment';
import CommentFactory from './commentFactory';

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
                    comments: res.data,
                });
                this.commentFactory = CommentFactory(res.data[0].messageBoardId, this.getHierarchyId);
            }

        } catch(err) {
            console.log(err);
        }
    }

    getHierarchyId = () => {
        this.state.comments.sort((a,b) => a.hierarchy.localeCompare(b.hierarchy));
        
        const lastHierarchy = this.state.comments[this.state.comments.length - 1].hierarchy;
        const newNum = parseInt(lastHierarchy.split("/")[1]) + 1;

        return `/${newNum}/`
    }
    
    createComment = (text, attribution) => {
        const newComment = this.commentFactory.createComment(text, attribution);
        this.setState(prev => ({
            comments : prev.comments.concat(newComment)
        }));
    }                      
    
    deleteComment = (commentId) => {
        this.setState(prev => ({
            comments : prev.comments.filter(x => x.Id !== commentId)
        }));
    }

    render() {
        return (        
            <div className={css.container}>
                <div className={css.innerContainer}>        
                    <p className={css.header}>Guest Book</p>
                    <CommentInput defaultState={false} 
                        post={this.createComment}/>
                    <CommentList delete={this.deleteComment} comments={this.state.comments} />
                </div>
            </div>
        )
    }
}

export default CommentPage;