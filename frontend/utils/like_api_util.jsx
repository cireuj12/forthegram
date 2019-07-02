export const createLike = (like) => {
    // debugger
    return $.ajax({
        method: 'POST',
        url: `api/likes`,
        data: {like}, 
    })
}

export const fetchLikes = (userId) => {
    return $.ajax({
        method: 'GET',
        url: `api/likes`,
        data: {userId}
    })
}

export const fetchLike = (id) => {
    return $.ajax({
        method: 'GET',
        url: `api/likes/${id}`,
    })
}

export const deleteLike = (id) => (
    $.ajax({
        method: 'DELETE',
        url: `api/likes/${id}`,
    })
)

export const fetchCommentsbyPost = (postId) => {
    return $.ajax({
        method: 'GET',
        url: `api/comments`
    })
}