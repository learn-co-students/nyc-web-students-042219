class CartController < ApplicationController
  def update
    # byebug

    add_item_to_cart(params[:nacho_id])
    # session[:cart] = []
    # session[:cart] << params[:nacho_id]

    # response
    redirect_to nachos_path
  end


end
