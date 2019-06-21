# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Species.create(name: 'human')
# Animal.create(name: 'Charlie', diet: 1, image_url: 'https://media.beliefnet.com/~/media/photos-with-attribution/entertainment/001/charlie-brown_credit-charles-m-schulz.jpg', species_id: 1)

Species.create(name: "dog")
Species.create(name: "cat")
Species.create(name: "cow")
Species.create(name: "sheep")
Species.create(name: "penguin")
Species.create(name: "octopus")
Species.create(name: "pig")

Species.all.each do |species|
  5.times do |x|
    Animal.create!(name: Faker::Name.name, diet: [0,1,2].sample, image_url: "https://loremflickr.com/150/150/#{species.name}", species_id: species.id)
  end
end
