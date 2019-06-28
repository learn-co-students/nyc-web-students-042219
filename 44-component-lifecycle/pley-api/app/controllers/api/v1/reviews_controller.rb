class Api::V1::ReviewsController < ApplicationController
  def create
    review = Review.new(review_params)
    review.restaurant = Restaurant.first

    if review.save
      render json: review
    end
    
  end

  private

  def review_params
    params.permit(:content, :rating, :tip_rating, :customer_id)
  end
end
