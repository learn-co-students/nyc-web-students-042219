class Tweet < ApplicationRecord
  belongs_to :feed, optional: true
  has_many :likes
end
