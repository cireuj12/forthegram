export const fetchFollows = (userId) => {
    // debugger
    return $.ajax({
        method: 'GET',
        url: `api/follows`,
        data: { userId }
    })
}

export const createFollow = (follow) => {
    return $.ajax({
        method: 'POST',
        url: `api/follows`,
        data: { follow },
    })
}

export const deleteFollow = (id) => {
    return $.ajax({
        method: 'DELETE',
        url: `api/follows/${id}`,
    })
}