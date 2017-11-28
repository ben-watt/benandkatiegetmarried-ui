import React from 'react';
import { toast } from 'react-toastify';
import _ from 'lodash';

import Comment from './comment.js';
import CommentList from './commentList/CommentList';
import CommentInput from './commentInput/CommentInput';
import api from '../../api/mockapi';

import css from './commentPage-styles.css';
import CommentFactory from './commentFactory';

class CommentPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            comments: []
        }
        this.guests = this.props.appState.guestDetails;
    }

    componentDidMount = async () => {
        try{
            const messageBoards = await api.getMessageBoards();
            const messages = await api.getComments(messageBoards.data[0].id);

            this.commentFactory = CommentFactory(messageBoards.data[0].id, this.getHierarchyId);

            if(messages.status === 200){
                this.setState({
                    comments: messages.data.map(c => new Comment(c)),
                });
            }

        } catch(err) {
            console.log(err);
        }
    }

    getHierarchyId = () => {
        if(this.state.comments.length === 0){
            return "/0/";
        }

        this.state.comments.sort((a,b) => a.hierarchy.localeCompare(b.hierarchy));
        const lastHierarchy = this.state.comments[this.state.comments.length - 1].hierarchy;
        const newNum = parseInt(lastHierarchy.split("/")[1]) + 1;

        return `/${newNum}/`
    }
    
    createComment = async (text, attribution) => {
        const newComment = this.commentFactory.createComment(text, attribution);

        try {
            var res = await api.postComment(newComment);          
            this.setState(prev => ({
                comments : prev.comments.concat(newComment)
            }));
        } catch(err){
            console.log(err);
            toast.error("Sorry we couldn't create that comment right now", {className:css.toast});
        }
    }                      
    
    deleteComment = async (commentId) => {
        try {
            var res = await api.deleteComment(commentId);
            this.setState(prev => ({
                comments : prev.comments.filter(x => x.id !== commentId)
            }));
        } catch(err){
            console.log(err);
            toast.error("Sorry we couldn't delete that comment right now", {className: css.toast});
        }
    }

    guestsHaveAlreadyLiked = (comment) => {
        var g = _.find(comment.likes, (g) => {
            return _.find(this.guests, { 'id' : g.id });
        });
        return typeof g === "undefined" ? false : true;
    }

    likeComment = async (comment) => {
        if(this.guestsHaveAlreadyLiked(comment)){
            toast.info("You must really like this comment, you have already liked it.", {className: css.toast});
            return
        }
        
        this.setState(prev => ({
            comments: prev.comments.map((c) => {
                if(c.id === comment.id){
                    comment.addLike(this.guests);
                }
                return c;
            })
        }));

        try {
            var res = await api.likeComment(comment.id, this.guests);
            if(res.status !== 204){
                throw new Error("Incorrect status returned");
            }
        } catch(err){
            toast.error("Connection problem, unable to like message", {className:css.toast});
            this.setState(prev => ({ 
                comments: prev.comments.map((c) => {
                    if(c.id === comment.id){
                        comment.removeLike(this.guests);
                    }
                    return c;
                })
            }));
        }
    }

    render() {
        return (        
            <div id="guestBook" className={css.container}>
                <div className={css.innerContainer}>        
                    <p className={css.header}>Guest Book</p>
                    <CommentInput appState={this.props.appState} defaultState={false} post={this.createComment}/>
                    <CommentList  appState={this.props.appState} like={this.likeComment} delete={this.deleteComment} comments={this.state.comments} />
                </div>
            </div>
        )
    }
}

export default CommentPage;