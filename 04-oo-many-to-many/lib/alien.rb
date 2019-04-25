class Alien
  attr_reader :name

  def initialize(name)
    @name = name
  end

  def colonize_planet(planet)
    Colony.new(planet, self)
  end

  def colonies
    Colony.all.select do |colony|
      colony.alien == self
    end

    # @tweets
    # Go ask the Tweet Model a question ("querying")
    # (its the responsibility of the Tweet model to know about all the tweets)
    # Look though all of the tweest in the @@all array
    # select just the ones that belong to this particular user
    # Tweet.all.select do |tweet|
    #   tweet.user == self
    # end
  end


  def planets
    # has many planets, through colonies
    # find the colonies this alien has, return the associated planet for each colony
    # we just build some tools that will be helpful for us
    # [<Planet>, <Planet>]
    self.colonies.map do |colony|
      colony.planet
    end
  end
end
