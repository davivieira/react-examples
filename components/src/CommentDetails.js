import React from 'react';

const CommentDetails = (props) => {
    return (
        <div className="comment">
        <a href="/" className="avatar"><img alt="avatar" src={props.img}/></a>
        <div className="content">
            <a href="/" className="author">{props.author}</a>
            <div className="metadata">
                <span>{props.timeAgo}</span>
            </div>
            <div className="text">{props.content}</div>
        </div>
    </div>
    );
}

export default CommentDetails;