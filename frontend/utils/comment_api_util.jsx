export const fetchComments = () => (
    $.ajax({
        method: 'GET',
        url: `api/comments`,
    })
)

export const createComment = (comment) => (
    $.ajax({
        method: 'POST',
        url: `api/comments`,
        data: comment, // is this nesting neccesary? { post }
    })
)

export const deleteComment = (id) => (
    $.ajax({
        method: 'DELETE',
        url: `api/comments/${id}`,
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