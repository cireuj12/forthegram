class FixColumnName < ActiveRecord::Migration[5.2]
  def change
    rename_column :comments, :photo_id, :post_id
    #Ex:- rename_column("admin_users", "pasword","hashed_pasword")
  end
end
