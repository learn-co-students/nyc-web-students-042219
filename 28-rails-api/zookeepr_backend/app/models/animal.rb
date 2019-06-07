class Animal < ApplicationRecord
  belongs_to :species
  enum diet: [:carnivore, :herbivore, :omnivore]

  def species_name
    self.species.name
  end
end
