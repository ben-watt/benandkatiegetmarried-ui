import React from 'react';
import styled from 'styled-components';

import Time from '../../common/Time';
import css from './commentList.css';

const CommentIcon = styled.i`
    position: absolute;
    right: 20px;
    bottom: 15px;
`
const DeleteIcon = styled.i`
    position:absolute;
    right: 20px;
    top: 10px;
    display: none;
    &:hover {
        color: red;
    }
`
const EditIcon = styled.i`
    position: absolute;
    right: 20px;
    top: 50px;
    display: none;
`
const CommentArea = styled.div`
    &:hover ${DeleteIcon}, &:hover ${EditIcon} {
        display: initial
    }
`
const Likes = styled.section`
    &:hover {
        color: red;
    }
    color: ${props => props.likes > 0 ? 'red' : 'grey'};
    display: inline;
`

const CommentList = (props) => {
    console.log(props);

    this.getAttributions = (attributions) => {
        var names = "";
        attributions.forEach((g,i) => {
            names += `${g.firstName + ' ' + g.lastName} `
            if(i !== attributions.length - 1)
                names += ' & ';
        });
        return names;
    }

    return ( 
        <div>  
            {props.comments.reverse().map((comment) => (
                <CommentArea key={comment.id} className={css.comment}>
                    <div className={css.attribution}>
                        <p>{this.getAttributions(comment.attributions)} &#183; <Time>{comment.date}</Time></p>
                        <DeleteIcon onClick={() => props.delete(comment.id)} className='fa fa-times'/>
                        <EditIcon className='fa fa-pencil'/>
                    </div>
                    <p>{comment.text}</p>
                    <Likes likes={comment.likes.length}>
                        <i className={`fa ${comment.likes.length > 0 ? 'fa-heart' : 'fa-heart-o'}`}/>
                        <p className={css.likeCount}> {comment.likes.length > 0 && comment.likes.length}</p>
                    </Likes>
                    <CommentIcon className='fa fa-comment-o' />
                </CommentArea>
            ))}
        </div>
    )
}

export default CommentList;