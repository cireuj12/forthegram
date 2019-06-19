json.extract! post, :id, :caption, :author_id
json.extract! post.author, :username

if post.photo.attached?
    json.photoUrl url_for(post.photo)
end
