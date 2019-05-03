class CreateSquirrels < ActiveRecord::Migration[5.2]
  def change
    create_table :squirrels do |t|
      t.string :name
      t.string :fur_color
      t.integer :height
      t.string :disposition
    end
  end
end

# rake db:migrate

# CreateSquirrels.new.change
# 
# def change(table_name)
#   # does some stuff
#   yield(TableBuilder.new)
# end

# def my_each(arr)
#   # puts "here"
#   counter = 0
#
#   while counter < arr.length
#     yield(arr[counter])
#     counter += 1
#   end
#
#   # puts "at the bottom"
# end
# [1,2,3].each do |n|
#   puts n
# end
