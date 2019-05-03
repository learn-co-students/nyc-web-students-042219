class Gallery

  attr_reader :name, :city

  @@all = []

  def initialize(name, city)
    @name = name
    @city = city
    @@all << self
  end

  def self.all
    @@all
  end

  def most_expensive_painting
    #find all the paintings in this gallery
    #of these paintings, which is the most expensive?
    my_paintings = Painting.all.select do |painting|
      painting.gallery == self
    end
    my_paintings.max_by {|painting| painting.price}
  end

end
