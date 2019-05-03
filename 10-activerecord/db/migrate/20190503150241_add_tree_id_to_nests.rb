class AddTreeIdToNests < ActiveRecord::Migration[5.2]
  def change
    add_column :nests, :tree_id, :integer
  end
end
