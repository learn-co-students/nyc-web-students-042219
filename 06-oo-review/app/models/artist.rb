require 'pry'
class Artist

  attr_reader :name, :years_experience

  @@all = []

  def initialize(name, years_experience)
    @name = name
    @years_experience = years_experience
    @@all << self
  end

  #class method will be defined with self.whatever
  def self.all
    @@all
  end

  def paintings
    binding.pry
    #return all of the paintings associated with that artist
    Painting.all.select do |painting|
      painting.artist == self
    end
  end

  def galleries
    #which paintings belong to me/'self'/are out in galleries?
    #of all the paintings, for every one of them, where/which gallery is it being exhibited in????
    my_paintings = self.paintings
    my_galleries = my_paintings.map do |painting|
      painting.gallery
    end
    my_galleries
  end

end
