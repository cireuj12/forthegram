# == Schema Information
#
# Table name: posts
#
#  id         :bigint           not null, primary key
#  caption    :text             not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Post < ApplicationRecord

    validates :caption, presence: true

    belongs_to :author,
        class_name: :User

    has_one_attached :photo
    
end
