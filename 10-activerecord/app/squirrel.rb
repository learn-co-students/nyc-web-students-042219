class Squirrel < ActiveRecord::Base
  has_many(:nests)
  # def nests
  #   # SELECT "nests".* FROM "nests" WHERE "nests"."squirrel_id" = ?
  # end

  # has_many(:trees, {:through => :nests})
  has_many :trees, through: :nests
  
  # def trees
  #   # SELECT "trees".* FROM "trees" WHERE "trees"."squirrel_id" = ?
  # end
end
