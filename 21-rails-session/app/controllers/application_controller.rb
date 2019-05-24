class ApplicationController < ActionController::Base


  # method to be my cart
  def cart
    # check to see IF session[:cart] exists
    session[:cart] ||= []
    # if session[:cart]
    #   session[:cart]
    # else
    #   session[:cart] = []
    # end
  end

  # need to hold all my item id's
  def add_item_to_cart(item_id)
    cart << item_id
  end


  # method to add a item to a cart
  def see_the_items
    @items = Nacho.find(cart)
  end



end
