class Calculator

  def addition(a, b)
    a.send(:+, b)
  end

  def factorial(n)
    if n == 0
      1
    else
      (1..n).reduce do |prod, n|
        prod * n
      end
    end
    # if n == 0
    #     1
    # else
    #     n * factorial(n-1)
    # end
  end

end
