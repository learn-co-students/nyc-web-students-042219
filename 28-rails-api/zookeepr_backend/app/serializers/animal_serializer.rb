class AnimalSerializer < ActiveModel::Serializer
  attributes :id, :name, :diet, :species_name
  # belongs_to :species
end
