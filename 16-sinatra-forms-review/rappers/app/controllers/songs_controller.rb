class SongsController < ApplicationController

  #index
  get "/songs" do
    @songs = Song.all
    erb :"songs/index"
  end

  delete "/songs" do
    Song.destroy_all
    redirect "/rappers"
  end

  #new
  get "/songs/new" do
    binding.pry
    erb :"songs/new"
  end

  #create
  post "/songs" do
    @song = Song.create(params)
    redirect "/songs/#{@song.id}"
  end

  #edit
  get "/songs/:id/edit" do
      @song = Song.find(params[:id])
      erb :"songs/edit"
  end

  #update
  patch "/songs/:id" do
    @song = Song.find(params[:id])
    @song.update(params[:song])
    redirect "songs/#{@song.id}"
  end


  #show
  get "/songs/:id" do
    @song = Song.find(params[:id])
    erb :"songs/show"
  end

  #delete
  delete "/songs/:id" do
    @song = Song.find(params[:id])
    @song.destroy
    redirect "/songs"
  end

end
