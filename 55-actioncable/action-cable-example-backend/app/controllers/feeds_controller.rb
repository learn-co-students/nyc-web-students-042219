class FeedsController < ApplicationController

  def show
    tweets = Feed.find_by(id: params[:id]).tweets.order(created_at: :desc)

    if tweets
      render json: tweets
    else
      render json: {error: 'That feed does not exist'}, status: 404
    end
  end

end
