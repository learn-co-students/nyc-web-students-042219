class LikesController < ApplicationController

  def create
    tweet = Tweet.find_by(id: params[:tweet_id])
    like = Like.new(tweet: tweet)

    if like.save
      render json: tweet
    else
      render json: {error: 'Could not create that like'}, status: 422
    end
  end

end
