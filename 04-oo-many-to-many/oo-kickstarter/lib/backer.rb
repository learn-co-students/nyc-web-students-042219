require 'pry'

class Backer
  attr_reader :name, :backed_projects

   def initialize(name)
     @name = name
     @backed_projects = []
   end

   def back_project(project)
     @backed_projects << project
     project.add_backer(self)
   end

end

logan = Backer.new('Logan')
alex = Backer.new('Alex')
logan = Backer.new('Logan')

hoverboard = Project.new('hoverboard')
hoverboard = Project.new('hoverboard')
coolest_cooler = Project.new('cool cooler')
