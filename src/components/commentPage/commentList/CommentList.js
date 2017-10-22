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
    console.log(props);

    this.getAttributions = (attributions) => {
        var names = "";
        attributions.forEach((g,i) => {
            names += `${g.firstName + g.lastName} `
            if(i !== attributions.length - 1)
                names += '&';
        });
        return names;
    }

    return ( 
        <div>  
            {props.comments.reverse().map((comment) => (
                <CommentArea key={comment.id} className={css.comment}>
                    <div className={css.attribution}>
                        <p>{this.getAttributions(comment.attributions)} &#183; <Time>{comment.date}</Time></p>
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