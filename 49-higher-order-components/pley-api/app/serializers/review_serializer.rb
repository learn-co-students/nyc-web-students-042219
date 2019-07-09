class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :content, :rating, :tip_rating, :restaurant_name, :restaurant_id, :customer_id

  def restaurant_name
    object.restaurant.name
  end
end
