import React from 'react';

import Comment from './Comment';

const CommentList = (props) => {
    props.comments.sort((a,b) => {
        return a.date > b.date ? -1 : 1;
    });
    return (
        <div>
            {props.comments.map(comment => {
                if(comment.hierarchyLevel > 1)
                    return <Comment like={props.like} delete={props.delete} appState={props.appState} child key={comment.id} comment={comment}/>
                return <Comment like={props.like} delete={props.delete} appState={props.appState} key={comment.id} comment={comment}/>
            })}
        </div>
    )
}

export default CommentList;