require 'pry'
ActiveRecord::Base.logger = Logger.new(STDOUT)
jitters = Squirrel.find_or_create_by(name: "Jitters")
jitters.update(fur_color: 'gray')
bart = Squirrel.find_or_create_by(name: "Bartholomew")
cheeks = Squirrel.find_or_create_by(name: "Cheeks")


oak = Tree.find_or_create_by(species: "oak", birth_year: 1992)
ent = Tree.find_or_create_by(species: "ent", birth_year: 1652)
maple = Tree.find_or_create_by(species: "maple", birth_year: 2018)

Nest.find_or_create_by(squirrel_id: jitters.id, tree_id: maple.id)

binding.pry
