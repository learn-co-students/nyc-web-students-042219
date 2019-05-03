require_relative '../config/environment.rb'


frida = Artist.new("Frida", 20)
mike = Artist.new("michaelangelo", 1500)
squidward = Artist.new("Squidward", 1)
billy_blake = Artist.new("Will Blake", 5)

zwirner = Gallery.new("Zwirner", "NYC")
the_met = Gallery.new("The Met", "New York, New York")

mona_lisa = Painting.new("Mona Lisa", 70000000000, frida, zwirner)
bold_and_brash = Painting.new("Bold and brash", 7, squidward, the_met)
red_dragon = Painting.new("Reddddd Dragon", 125, billy_blake, the_met)
frida.paintings



binding.pry

puts "Bob Ross rules."
