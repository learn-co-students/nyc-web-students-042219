class Customer < ApplicationRecord
  has_many :reviews
  has_many :restaurants, through: :reviews
end
