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
    # binding.pry
    results.map do |row|
      # Tweet.new({'message' => row['message'], 'user_id' => row['user_id']})
      Tweet.new(row)
    end


  end

  def initialize(attributes = {})
    @message = attributes['message']
    @user_id = attributes['user_id']

    @id = attributes['id']
  end

  def save

    if !persisted?
      sql = <<-sql
       INSERT INTO tweets
       (message, user_id)
       VALUES (?, ?)
      sql
      # binding.pry

      DB[:conn].execute(sql, self.message, self.user_id)
    else
      # do the update SQL

    end

    # self.class.all << self
  end

  private

  def persisted?
    !!self.id
  end

end
