class CustomerSerializer < ActiveModel::Serializer
  attributes :id, :name, :bio, :dogs, :children, :avatar_url, :dietary_info, :average_rating, :average_tip_rating, :review_ids

  # has_many :reviews

  def review_ids
    object.reviews.pluck(:id)
  end

  def average_rating
    if object.reviews.length > 0
      object.reviews.pluck(:rating).reduce(:+).to_f/object.reviews.length
    else
      0
    end
  end

  def average_tip_rating
    if object.reviews.length > 0
      object.reviews.pluck(:tip_rating).reduce(:+).to_f/object.reviews.length
    else
      0
    end
  end
end
