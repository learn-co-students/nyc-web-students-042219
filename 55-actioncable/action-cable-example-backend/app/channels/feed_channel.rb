class FeedChannel < ApplicationCable::Channel
  def subscribed
    puts "SUBSCRIBED!" * 100

    stream_from "feed_channel"
  end

  def unsubscribed
    puts "UNSUBSCRIBED :(" * 10
    # Any cleanup needed when channel is unsubscribed
  end
end
