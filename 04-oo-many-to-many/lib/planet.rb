class Planet
  attr_reader :name

  def initialize(name)
    @name = name
  end


  def colonies
    Colony.all.select do |colony|
      colony.planet == self
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


  def aliens
    self.colonies.map do |colony|
      colony.alien
    end
  end
end
