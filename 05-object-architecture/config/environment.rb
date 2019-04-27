require_relative '../lib/pescatarianable'
require_relative '../lib/walkable'
require_relative '../lib/pet'

Dir[File.join(File.dirname(__FILE__), "../lib", "*.rb")].each {|f| require f}
