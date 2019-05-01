class User
  attr_reader :username

  def initialize(username)
    @username = username
    # @tweets = []
  end

  def tweets
    # @tweets
    # Go ask the Tweet Model a question ("querying")
    # (its the responsibility of the Tweet model to know about all the tweets)
    # Look though all of the tweest in the @@all array
    # select just the ones that belong to this particular user
    Tweet.all.select do |tweet|
      tweet.user == self
    end
    # SELECT * FROM tweets WHERE tweets.user_id = #{self.id}
  end

  # user.post_tweet("coffeeeeeeeee")

  def post_tweet(message)
    Tweet.new(message, self)
    # @tweets << tweet
  end

end
