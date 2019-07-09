# == Schema Information
#
# Table name: follows
#
#  id           :bigint           not null, primary key
#  follower_id  :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  following_id :integer          not null
#

class Follow < ApplicationRecord

    belongs_to :follower,
        primary_key: :id,
        foreign_key: :follower_id,
        class_name: :User

    belongs_to :following,
        primary_key: :id,
        foreign_key: :following_id,
        class_name: :User
    
    #following is all the follows where follower_id == user_id

end
