class TweetSerializer < ActiveModel::Serializer
  attributes :id, :content, :feed_id, :likes

  def likes
    self.object.likes.length
  end
end
