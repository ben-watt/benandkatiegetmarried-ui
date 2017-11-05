import Comment from './comment';

const CommentFactory = function(messageBoardId, getHierarchyId){
    var obj = {};

    obj.createComment = function(text, attributions){
        var hierarchyId = getHierarchyId();
        return new Comment({messageBoardId, hierarchyId, text, attributions})
    }
    return obj
}

export default CommentFactory