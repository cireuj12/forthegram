# json.array! @posts do |post|
#     json.set! post.id do
#         json.extract! post, :id, :caption, :author_id
#     end
#     json.photoUrl url_for(post.photo)
# end


json.array! @posts do |post|
    json.extract! post, :id, :caption, :author_id
    json.photoUrl url_for(post.photo)
end