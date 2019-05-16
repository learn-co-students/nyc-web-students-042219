class AddAlbumSalesToRappers < ActiveRecord::Migration[5.2]
  def change
    add_column :rappers, :album_sales, :integer
  end
end
