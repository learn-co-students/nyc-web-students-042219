class AnimalsController < ApplicationController
  def index
    @animals = Animal.all
    render json: @animals
  end

  def show
    @animal = Animal.find_by(id: params[:id])
    render json: @animal
  end

  def create
    @species = Species.find_or_create_by(name: params[:species_name])
    @animal = Animal.create(name: params[:name], species: @species, diet: params[:diet].to_i)
    render json: @animal
  end
end
