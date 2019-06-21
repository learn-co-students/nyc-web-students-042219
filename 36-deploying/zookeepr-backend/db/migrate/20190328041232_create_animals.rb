class CreateAnimals < ActiveRecord::Migration[5.2]
  def change
    create_table :animals do |t|
      t.string :name
      t.integer :diet
      t.string :image_url
      t.references :species, foreign_key: true

      t.timestamps
    end
  end
end
