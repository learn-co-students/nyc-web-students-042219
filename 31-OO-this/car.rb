class Car
  attr_reader :make, :model, :serial_number
  @@all = []
  def initialize(make, model, serial_number)
    @make = make
    @model = model
    @serial_number = serial_number
  end

  def start
    puts "Serial Number: #{self.serial_number}"
  end

  def self.method
    #Some Code
  end


end

# Car.new()
