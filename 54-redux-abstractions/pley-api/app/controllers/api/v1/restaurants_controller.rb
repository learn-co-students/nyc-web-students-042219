class Api::V1::RestaurantsController < ApplicationController
  def show
    restaurant = Restaurant.first
    render json: restaurant
  end

  def update
    restaurant = Restaurant.first
    if restaurant.update(restaurant_params)
      render json: restaurant
    else
      render json: { error: "Bad." }, status: :not_accepted
    end
  end

  private

  def restaurant_params
    params.require(:restaurant).permit(:name, :location, :cuisine)
  end
end
