class Pet
  attr_reader :name
  attr_accessor :mood

  def initialize(name)
    @name = name
    @mood = 'nervous'
  end

  def make_noise
    puts "making a noise"
  end
end

# only a cat and dog can do (not a fish)
# Walkable
# def stretch
# end
#
# def breathe_air
# end
#
# def run
# end

# only a cat and a fish can do (not a dog)

# demonstrate_suspicion

# Pescatarianable
# eat_another_fish


# ActiveRecord::Base

# module ActiveRecord
#   # class Base
#   # end
# end

# module Sinatra
#   # class Base
#   # end
#
# end
# Sinatra::Base

# class Base
