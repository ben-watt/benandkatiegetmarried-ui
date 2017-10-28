import React from 'react';
import styled from 'styled-components';
import _ from 'lodash';

import Time from '../../common/Time';
import css from './commentList.css';

const DeleteIcon = styled.i`
    position:absolute;
    right: 20px;    
    top: 10px;
    color: grey;
    cursor: pointer;
    display: ${p => console.log(p)};
    &:hover {
        color: red;
    }
`

const Likes = styled.section`
    &:hover {
        color: red;
    }
    color: ${p => p.likes > 0 ? 'red' : 'grey'};
    display: inline;
    cursor: pointer;
`

const StyledComment = styled.div`
    background-color: var(--offWhite);
    padding: 10px;
    margin: ${p => p.child ? '0px 0px 0px 0px':'10px 0px 0px 0px'};
    border: 2px solid '#C1C1C1';
    box-shadow: 0px 2px 3px #C1C1C1;
    white-space: pre-wrap;
    position: relative;
    ${p => p.child && 'border-top: 1px solid #d6d6d6'}
`

const Comment = (props) => {
    const comment = props.comment;

    this.getAttributions = (attributions) => {
        var names = "";
        attributions.forEach((g,i) => {
            names += `${g.firstName + ' ' + g.lastName} `
            if(i !== attributions.length - 1)
                names += ' & ';
        });
        return names;
    }

    this.isCommentOwner = (attributions) => {
       const guests = props.appState.guestDetails;
       const owner = _.find(attributions, (g) => {
            return _.find(guests, { 'id' : g.id });
        });
        return owner ? true : false;
    }

    return (     
        <StyledComment child={props.child}>        
            <div className={css.attribution}>
                <p>{this.getAttributions(comment.attributions)} &#183; <Time>{comment.date}</Time></p>
                {this.isCommentOwner(comment.attributions) && <DeleteIcon onClick={() => props.delete(comment.id)} className='fa fa-times'/>}
            </div>
            <p>{comment.text}</p>
            <Likes onClick={() => props.like(comment.id)} likes={comment.likes.length}>
                <i className={`fa ${comment.likes.length > 0 ? 'fa-heart' : 'fa-heart-o'}`}/>
                <p className={css.likeCount}> {comment.likes.length > 0 && comment.likes.length}</p>
            </Likes>
        </StyledComment>
    )
}

export default Comment