# == Schema Information
#
# Table name: comments
#
#  id         :bigint           not null, primary key
#  body       :text             not null
#  user_id    :integer          not null
#  post_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#


class Comment < ApplicationRecord 

    validates :body, presence: true

    belongs_to :post,
        class_name: :Post

    belongs_to :user

end
