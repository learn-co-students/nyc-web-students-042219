class NachosController < ApplicationController
  before_action :find_nacho, only: [:show]
  # before_action :get_items_from_cart, only: [:index]

  def index # /nachos
    # request
    @nachos = Nacho.all
    see_the_items
    # response
    render(:index)
  end

  def show
    # model??

    #before_action called first

    # response
    render(:show)
  end

  private

  def find_nacho
    @nacho = Nacho.find(params[:id])
  end
end
