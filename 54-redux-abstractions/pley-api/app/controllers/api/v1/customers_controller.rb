class Api::V1::CustomersController < ApplicationController
  def show
    customer = Customer.find_by(id: params[:id])
    render json: customer
  end

  def index
    customers = Customer.all

    render json: customers
  end
end
