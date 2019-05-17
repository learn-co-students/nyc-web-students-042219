class CreateRappers < ActiveRecord::Migration[5.2]
  def change
    create_table :rappers do |t|
      t.string :name
      t.integer :age
      t.boolean :fire

      t.timestamps
    end
  end
end
