require 'pry'
require_relative './user.rb'
require_relative './tweet.rb'



coffee_dad = User.new('coffee_dad')
tea_uncle = User.new('tea_uncle')

coffee_dad.post_tweet("coffee#")
tea_uncle.post_tweet("earl gray#")
coffee_dad.post_tweet("coffee#")
tea_uncle.post_tweet("tea tea tea tea")
coffee_dad.post_tweet("im sad")


binding.pry
