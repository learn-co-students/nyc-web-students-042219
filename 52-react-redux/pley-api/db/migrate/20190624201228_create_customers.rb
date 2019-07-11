class CreateCustomers < ActiveRecord::Migration[5.2]
  def change
    create_table :customers do |t|
      t.text :bio
      t.string :name
      t.boolean :dogs
      t.boolean :children
      t.text :dietary_info

      t.timestamps
    end
  end
end
