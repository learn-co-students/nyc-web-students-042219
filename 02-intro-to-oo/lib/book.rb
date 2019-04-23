class Book

  def initialize(title, author)
    # instance variable, scope is the whole instance
    @title = title
    @author = author
  end

  def title
    @title
  end

  def author
    @author
  end

  def cover_page
    binding.pry
    # "Title Of The Book"
    #   by
    # Author Name
  end

end
