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
    &:hover {
        color: red;
    }
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
const Likes = styled.section`
    &:hover {
        color: red;
    }
    color: ${p => p.likes > 0 ? 'red' : 'grey'};
    display: inline;
    cursor: pointer;
`

const LikeHover = styled.div`   
    display: none;
    position: absolute;
    z-index: 1;

    @media (min-width: 891px) {
        ${Likes}:hover + & {
            display: ${props => props.likeCount > 0 ? "initial": "none" };
        }
    }
`

const LikeHoverList = styled.ul`
    position: relative;
    background-color: hsla(0, 100%, 0%, 0.8);
    border-radius: 2px;
    list-style-type: none;
    padding: 2px 5px 2px 5px;
    color: white;
    list-style-type: none;
    margin: 0px;
    top: -4px;
    left: 15px;
`

const LeftTriangle = styled.div`
    border-right: 8px solid hsla(0,100%,0%,0.8);
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    position: absolute;
    left: 7px;
    top: 5px
`

const Comment = (props) => {
    const comment = props.comment;

    this.getAttributions = (attributions) => {
        var names = "";
        attributions.forEach((g,i) => {
            names += `${g.firstName + ' ' + g.lastName} `

            if(i === attributions.length - 2) {
                names += ' & ';
            } else if(i % 2 === 0 && attributions.length - 1 !== i) {
                names += ', ';
            }   
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
    
    this.unique = (obj, key) => {
        var uniqueList = [];
        obj.map((x) => { return x[key]; })
        .forEach((v) => { 
            uniqueList.indexOf(v) === -1 && uniqueList.push(v)
        });
        return uniqueList;
    }
    
    this.countUnique = function countDistinct(obj, key) {
        return this.unique(obj,key).length;
    }

    this.getLikes = (comment) => {
        let invites = this.unique(comment.likes, "inviteId");
        let result = [];
        invites.forEach((i) => {
            let likes = comment.likes.filter(l => l.inviteId === i);
            result.push(this.getAttributions(likes));
        });
        return result.map((l) => <li>{l}</li>);
    }
    
    return (     
        <StyledComment child={props.child}>        
            <div className={css.attribution}>
                <p>{this.getAttributions(comment.attributions)} &#183; <Time>{comment.date}</Time></p>
                {this.isCommentOwner(comment.attributions) && <DeleteIcon onClick={() => props.delete(comment.id)} className='fa fa-times'/>}
            </div>
            <p>{comment.text}</p>
            <Likes onClick={() => props.like(comment)} likes={comment.likes.length}>
                <i className={`fa ${comment.likes.length > 0 ? 'fa-heart' : 'fa-heart-o'}`}/>
                <p className={css.likeCount}> {comment.likes.length > 0 && this.countUnique(comment.likes, "inviteId")}</p>
            </Likes>
            <LikeHover likeCount={comment.likes.length}>
                <LikeHoverList>
                    <li>{this.getLikes(comment)}</li>
                </LikeHoverList>
                <LeftTriangle/>
            </LikeHover>
        </StyledComment>
    )
}

export default Comment