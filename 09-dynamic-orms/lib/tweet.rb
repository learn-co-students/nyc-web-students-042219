class Tweet < ActiveRecord::Base

  belongs_to :user
  # def user
  #   User.find_by(id: self.user_id)
  #     # .find, .find_by, .where (if you are using .where, pay attention to the return value)
  # end
end
