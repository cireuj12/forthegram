json.extract! post, :id, :caption, :author_id

if post.photo.attached?
    json.photoUrl url_for(post.photo)
end
