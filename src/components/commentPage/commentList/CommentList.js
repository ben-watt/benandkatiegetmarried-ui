import React from 'react';
import styled from 'styled-components';

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

const CommentList = (props) => {
    return ( 
        <div>  
            {props.comments.reverse().map((comment) => (
                <CommentArea key={comment.Id} className={css.comment}>
                    <div className={css.attribution}>
                        <p>Ben & Katie 	&#183; 14th Sept</p>
                        <DeleteIcon className='fa fa-times'/>
                        <EditIcon className='fa fa-pencil'/>
                    </div>
                    <p>{comment.text}</p>
                    <div className={css.likes}>
                        <i className='fa fa-heart-o' />
                        <p className={css.likeCount}> 10</p>
                    </div>
                    <CommentIcon className='fa fa-comment-o' />
                </CommentArea>
            ))}
        </div>
    )
}

export default CommentList;