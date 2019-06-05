// export const fetchComment = {post, userId} => (
//     $.ajax({
//         method: 'GET',
//         url: `api/posts/${post.id}/comments/${comment.id}`,
//     })
// )

export const fetchComments = () => (
    $.ajax({
        method: 'GET',
        url: `api/posts/${post.id}/comments`,
    })
)

export const createComment = (post, comment) => (
    $.ajax({
        method: 'POST',
        url: `api/posts/${post.id}/comments`,
        data: { comment }, // is this nesting neccesary? { post }
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