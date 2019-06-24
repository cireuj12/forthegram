# json.array! @posts do |post|
#     json.set! post.id do
#         json.extract! post, :id, :caption, :author_id
#     end
#     json.photoUrl url_for(post.photo)
# end


@posts.each do |post|
    json.set! post.id do #You want to a key of an id pointing to whole post 
        json.extract! post, :id, :caption, :author_id 
        json.photoUrl url_for(post.photo)
        json.extract! post.author, :username
    end
end

# @posts.each do |post|
#     json.set! post.id do  
#         json.extract! post.author, :username
#     end
# end

