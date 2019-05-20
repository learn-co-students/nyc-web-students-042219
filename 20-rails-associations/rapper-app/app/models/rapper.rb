class Rapper < ApplicationRecord
  has_many :songs
  validates :name, presence: true
  # validates :age, presence: true, numericality: {only_integer: true, less_than: 40}
  validate :get_new_hobby

  def get_new_hobby
    if self.age > 40
      errors.add(:age, "get a new hobby")
    end
  end

end
