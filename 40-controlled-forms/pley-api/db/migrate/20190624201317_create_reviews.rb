class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.string :content
      t.integer :rating
      t.integer :tip_rating
      t.belongs_to :restaurant, foreign_key: true
      t.belongs_to :customer, foreign_key: true

      t.timestamps
    end
  end
end
