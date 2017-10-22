import guid from 'uuid/v4';

const Comment = function(text, attribution) {
    this.id = guid();
    this.text = text
    this.attribution = attribution
}

export default Comment