class Animal < ApplicationRecord
  belongs_to :species

  enum diet: [:carnivore, :omnivore, :herbivore]
  validates :name, uniqueness: {scope: :species_id, message: 'cannot be the same for two animals of the same species'}
end
