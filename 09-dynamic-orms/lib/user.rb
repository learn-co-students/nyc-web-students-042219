class User < ActiveRecord::Base

  has_many :tweets

  # def tweets
  #   # "SELECT * FROM tweets WHERE tweets.user_id = #{self.id}"
  #   # .find, .find_by, .where
  #   # binding.pry
  #   Tweet.where(user_id: self.id)
  # end
end
