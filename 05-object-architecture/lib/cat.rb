class Cat < Pet
  include Walkable
  include Pescatarianable

  # Cat.new :)
  # Cat.new('lofi') :(
  def initialize(*args)
    super
    @num_lives = 9
  end

  def make_noise
    super
    puts "meow"
  end

  def make_noise

    puts "last"
  end
end
