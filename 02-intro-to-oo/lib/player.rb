require 'pry'
# player = {
#   player_name: "Alan Anderson",
#   number: 0,
#   shoe: 16,
#   points: 22,
#   rebounds: 12,
#   assists: 12,
#   steals: 3,
#   blocks: 1,
#   slam_dunks: 1
# }

class Player

  attr_accessor :name, :points, :number, :shoe



  def initialize(player_hash)
    @name = player_hash['name']
    @number = player_hash['number']
    @shoe = shoe
    @points = points
  end

  # def name
  #   @name
  # end
  #
  # def number
  #   @number
  # end
  #
  # def points
  #   @points
  # end

  def points=(new_points)
    @points = new_points
  end

end

player = Player.new("Jeff Adrien", 0, 16, 22)
binding.pry
