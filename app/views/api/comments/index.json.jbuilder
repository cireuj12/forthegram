json.array! @comments do |comment|
    json.extract! post, :id, :body, :user_id, :post_id
end