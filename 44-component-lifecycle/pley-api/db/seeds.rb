# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

100.times do
  name = Faker::Name.name
  Customer.create(
    name: name,
    bio: Faker::Hipster.paragraph,
    dogs: [true, false].sample,
    children: [true, false].sample,
    dietary_info: Faker::Hipster.paragraph,
    avatar_url: Faker::Avatar.image(name.gsub(/\s/, "-"), "250x250")
  )
end

20.times do 
  restaurant = Restaurant.create(
    name: Faker::Restaurant.name,
    location: Faker::Address.full_address,
    cuisine: Faker::Restaurant.type
  )

  written_for = []

  (8..15).to_a.sample.times do
    customer = Customer.all.sample

    while written_for.include?(customer.id)
      customer = Customer.all.sample
    end

    written_for << customer.id

    Review.create(
      restaurant: restaurant,
      customer: customer,
      content: Faker::Hipster.sentence,
      rating: [1,2,3,4,5].sample,
      tip_rating: [1,2,3,4,5].sample
    )
  end
end

