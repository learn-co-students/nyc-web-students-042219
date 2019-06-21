class Api::V1::AnimalsController < ApplicationController
  def create
    @species = Species.find_or_create_by(name: params[:species_name])

    @animal = Animal.new(name: params[:name], image_url: params[:image_url], species: @species, diet: params["diet"].to_i)

    if @animal.save
      render json: AnimalSerializer.new(@animal).serialized_json
    else
      render json: @animal.errors.full_messages, status: 422
    end
  end

  def show
    @animal = Animal.find(params[:id])

    render json: AnimalSerializer.new(@animal).serialized_json
  end

  def index
    @animals = Animal.all

    render json: AnimalSerializer.new(@animals).serialized_json
  end

  def destroy
    @animal = Animal.find(params[:id])
    @animal.destroy

    render json: AnimalSerializer.new(@animal).serialized_json
  end

  def weather
    response = RestClient.get "https://api.darksky.net/forecast/#{ENV['DARK_SKY_API_KEY']}/42.3601,-71.0589"
    render json: JSON.parse(response)
  end
  # def animal_params
  #   # {animal => {name => '', diet => 0}}
  #   params.require(:animal).permit(:name, :diet)
  # end


end
