class SongsController < ApplicationController

  def index
    @songs = Song.all
  end


  def new #"/songs/new"
    @song = Song.new
  end

  def show #"/songs/:id"
    @song = Song.find(params[:id]) #thinking that :id = "new"
  end

  def create
    @song = Song.create(song_params)
    byebug
    # if  @song.valid?
    #   @song.save
    #
    # else
    #
    # end
    redirect_to "/songs/#{@song.id}"
  end

  private

  def song_params
    params.require(:song).permit(:title, :rapper_id)
  end
end
