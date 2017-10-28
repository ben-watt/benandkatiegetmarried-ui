import React from 'react';

import Comment from './Comment';

const CommentList = (props) => {
    return (
        <div>
            {props.comments.reverse().map(comment => {
                if(comment.hierarchyLevel > 1)
                    return <Comment like={props.like} delete={props.delete} appState={props.appState} child key={comment.id} comment={comment}/>
                return <Comment like={props.like} delete={props.delete} appState={props.appState} key={comment.id} comment={comment}/>
            })}
        </div>
    )
}

export default CommentList;