json.post do 
    json.partial! '/api/posts/post', post: @post
end

json.author do 
    json.partial! '/api/users/user', user: @post.author # or .user?
end

# json.author do 
#     json.partial! '/api/users/user', user: @post.caption # or .user?
# end


