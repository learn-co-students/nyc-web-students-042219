class AddColumnToSongs < ActiveRecord::Migration
  def change
    add_column :songs, :rapper_id, :integer
  end
end
