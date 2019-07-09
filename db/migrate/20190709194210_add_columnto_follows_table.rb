class AddColumntoFollowsTable < ActiveRecord::Migration[5.2]
  def change
    add_column :follows, :following_id, :integer, null: false
    add_index :follows, [:follower_id, :following_id], unique: true
  end
end
