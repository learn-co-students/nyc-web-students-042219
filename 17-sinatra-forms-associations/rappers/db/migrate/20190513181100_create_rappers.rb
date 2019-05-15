class CreateRappers < ActiveRecord::Migration
  def change
    create_table :rappers do |t|
      t.string :name
      t.integer :album_sales
      t.boolean :fire  
    end
  end
end
