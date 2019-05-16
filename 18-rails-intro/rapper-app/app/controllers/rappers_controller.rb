class RappersController < ApplicationController
  def index
    @rappers = Rapper.all
  end

  def new
  end

  def fire
    @rapper = Rapper.find(params[:id])
  end

  def show
    @rapper = Rapper.find(params[:id])
  end

  def create
  end

  def edit
  end

  def update
  end

  def delete
  end
end
