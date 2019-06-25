export const createLike = (like) => {
    // debugger
    return $.ajax({
        method: 'POST',
        url: `api/likes`,
        data: {like}, 
    })
}

export const fetchLikes = () => {
    return $.ajax({
        method: 'GET',
        url: `api/likes`,
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