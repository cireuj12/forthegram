// export const fetchComment = {post, userId} => (
//     $.ajax({
//         method: 'GET',
//         url: `api/posts/${post.id}/comments/${comment.id}`,
//     })
// )

export const fetchComments = (post) => (
    $.ajax({
        method: 'GET',
        url: `api/comments`,
    })
)

export const createComment = (comment) => (
    $.ajax({
        method: 'POST',
        url: `api/comments`,
        data: comment , // is this nesting neccesary? { post }
    })
)

// export const updateComment = (post, comment) => (
//     $.ajax({
//         method: 'PATCH',
//         url: `api/posts/${post.id}/comments/${comment.id}`,
//         data: { post }
//     })
// )

// export const deleteComment = (post, comment) => (
//     $.ajax({
//         method: 'DELETE',
//         url: `api/posts/${post.id}/comments/${comment.id}`,
//     })
// )