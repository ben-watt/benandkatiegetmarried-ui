import Comment from './comment';

const CommentFactory = function(messageBoardId, getHierarchyId){
    var obj = {};

    obj.createComment = function(text, attribution){
        var hierarchyId = getHierarchyId();
        return new Comment(messageBoardId, hierarchyId, text, attribution, )
    }

    return obj
}

export default CommentFactory