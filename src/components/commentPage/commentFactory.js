import Comment from './comment';

const CommentFactory = function(messageBoardId, getHierarchyId){
    var obj = {};

    obj.createComment = function(text, attributions){
        var hierarchy = getHierarchyId();
        return new Comment({messageBoardId, hierarchy, text, attributions})
    }
    return obj
}

export default CommentFactory