class Book

  def initialize(title, author)
    # instance variable, scope is the whole instance

    @title = title
    @author = author
  end

  def title
    @title.split(" ").map { |word| word.capitalize }.join(" ")
  end

  def author
    @author.split(" ").map { |word| word.capitalize }.join(" ")
  end

  def zebra
    puts "zebra"
  end

  def cover_page
    # capitalized_title = @title.split(" ").map { |word| word.capitalize }.join(" ")
    # capitalized_author = @author.split(" ").map { |word| word.capitalize }.join(" ")
    # binding.pry
    "\"#{self.title}\"\n\tby\n#{author}"
    # "Title Of The Book"
    #   by
    # Author Name
  end

end
