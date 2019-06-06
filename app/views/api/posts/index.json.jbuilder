# json.array! @posts do |post|
#     json.set! post.id do
#         json.extract! post, :id, :caption, :author_id
#     end
#     json.photoUrl url_for(post.photo)
# end


@posts.each do |post|
    json.set! post.id do
        json.extract! post, :id, :caption, :author_id 
        json.photoUrl url_for(post.photo)
    end
end

@posts.each do |post|
    json.set! post.id do  
        json.extract! post.author, :username
    end
end

