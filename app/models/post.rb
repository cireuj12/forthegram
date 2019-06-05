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
    
    validate :ensure_photo

    belongs_to :author,
          primary_key: :id,
          foreign_key: :author_id,
          class_name: :User

    has_one_attached :photo

    has_many :comments,
        foreign_key: :post_id

    def ensure_photo
        unless self.photo.attached?
            errors[:photo] << "Must be attached"
        end 
    end

    
end
