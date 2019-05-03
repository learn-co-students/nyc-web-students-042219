class Painting

  attr_reader :title, :price, :artist, :gallery

  @@all = []

  #the model/class that "belongs to", holds the reference to the class it belongs to

  def initialize(title, price, artist, gallery)
    @artist = artist
    @gallery = gallery
    @title = title
    @price = price
    @@all << self
  end

  def self.all
    @@all
  end

end
