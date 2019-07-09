@follows.each do |follow|
    json.set! follow.id do
        json.extract! follow, :id, :follower_id
        json.extract! follow.follower, :username
    end
end