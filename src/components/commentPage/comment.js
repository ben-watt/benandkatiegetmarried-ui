import guid from 'uuid/v4';

const Comment = function(comment) {
    this.id = comment.id || guid();
    this.date = comment.date || new Date().toISOString();    
    this.text = comment.text
    this.attributions = comment.attributions
    this.likes = comment.likes || [];
    this.messageBoardId = comment.messageBoardId
    this.hierarchy = comment.hierarchy
}

Comment.prototype.addLike = (guests) => {
    guests.forEach(guest => {
        this.likes.push(guest);
    });
}

Comment.prototype.removeLike = (guests) => {
    guests.forEach(guest => {
        const index = this.likes.indexOf(guest);
        this.likes.slice(index, 1);
    })
}



export default Comment