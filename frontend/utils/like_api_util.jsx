export const createLike = (like) => {
    // debugger
    return $.ajax({
        method: 'POST',
        url: `api/likes`,
        data: {like}, 
    })
}

export const fetchLikesbyUser = (userId) => {
    return $.ajax({
        method: 'GET',
        url: `api/likes`,
        data: {userId}
    })
}

export const fetchAllLikes = () => {
    return $.ajax({
        method: 'GET',
        url: `api/likes`
    })
}

export const fetchLikesbyPost = (postId) => {
    // debugger
    return $.ajax({
        method: 'GET',
        url: `api/likes`,
        data: {postId}
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