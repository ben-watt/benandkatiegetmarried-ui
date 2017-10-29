import React from 'react';
import { toast } from 'react-toastify';
import _ from 'lodash';

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
    
    createComment = async (text, attribution) => {
        const newComment = this.commentFactory.createComment(text, attribution);

        try {
            var res = await api.postComment(newComment);          
            this.setState(prev => ({
                comments : prev.comments.concat(newComment)
            }));
        } catch(err){
            console.log(err);
            toast.error("Sorry we couldn't create that comment right now");
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
            toast.error("Sorry we couldn't delete that comment right now");
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
            toast.info("You must really like this comment, you have already liked it.");
            return
        }

        try {
            var res = await api.likeComment(comment.id, this.guests);
            if(res.status === 204){
                this.setState(prev => ({
                    comments: prev.comments.map((c) => {
                        if(c.id === comment.id){
                            c.likes = c.likes.concat(this.guests)
                        }
                        return c;
                    })
                }));
            }
        } catch(err){
            console.log(err);
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