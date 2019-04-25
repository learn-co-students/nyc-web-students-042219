require 'pry'
require_relative './lib/alien'
require_relative './lib/planet'
require_relative './lib/colony'

# alien has many colonies
# alien has many planets through colonies

# planet has many colonies
# planet has many aliens through colonies

# colony belongs to alien (it is initialized with a alien)
# colony belongs to planet (it is initialized with a planet)

humans = Alien.new('humans')
klingons = Alien.new('klingons')
martians = Alien.new('martians')

earth = Planet.new('earth')
saturn = Planet.new('saturn')
tatooine = Planet.new('tatooine')

humans.colonize_planet(earth)
humans.colonize_planet(tatooine)

klingons.colonize_planet(saturn)
klingons.colonize_planet(earth)


martians.colonize_planet(tatooine)

binding.pry
