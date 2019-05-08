require_relative './spec_helper'
require_relative '../calculator'

describe "Calculator" do



  describe '#addition' do

    before(:each) do
      puts "huh?" * 100
    end
    
    it('returns the sum of the two given numbers!!!!!') do
      # - Setup
      calc = Calculator.new
      # - Execute/trigger
      sum = calc.addition(3, 4)
      # - Expectation
      expect(sum).to eq(7)
      # - Teardown

    end

    it 'works with negative numbers' do
      calc = Calculator.new
      expect(calc.addition(-1, 6)).to eq(5)
      expect(calc.addition(-1, 5)).to eq(4)
    end
  end


  describe '#factorial' do
    # 5! = 5 * 4 * 3 * 2 * 1
    # 0! = 1
    it 'returns 1 when given 0' do
      calc = Calculator.new

      expect(calc.factorial(0)).to eq(1)

    end

    it 'returns the product of all numbers from n down to 1' do
      calc = Calculator.new

      expect(calc.factorial(5)).to eq(120)
    end
  end
end
