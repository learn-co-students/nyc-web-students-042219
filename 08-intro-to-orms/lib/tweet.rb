class Tweet
  attr_accessor :message, :user_id
  attr_reader :id
  # ALL = []
  # ALL = "hello" X bad X
  # ALL << "hello" fine

  def self.all
    sql = "SELECT * FROM tweets"
    results = DB[:conn].execute(sql)

    # right now this returns an array of hashes,
    # i want this to return an array of Tweet instances
    results

  end

  def initialize(attributes={})
    @message = attributes['message']
    @user_id = attributes['user_id']
  end

  def save
    self.class.all << self
  end

end
