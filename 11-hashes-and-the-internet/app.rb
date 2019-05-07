# 'https://www.googleapis.com/books/v1/volumes?q=ruby+programming'
require 'rest-client' # httparty open-uri faraday
require 'pry'
require 'json'

# * Write an application that takes a search term from a user
# * Make a Request to the GoogleBooks API and get back some results
#   * https://www.googleapis.com/books/v1/volumes?q=ruby+programming
# * Display the titles, author names, and description for each book


# Commented out broken code
# Book (title, description)
# Author
# User
#
# class CLI
#
#   attr_accessor :current_user
#
#   def welcome
#     puts "Welcome to the Book Searcher"
#     puts "Enter your name"
#     username = gets.chomp
#     current_user = User.find_by(username: username)
#
#     puts "Enter a search term to find books about:"
#     search_term = gets.chomp
#   end
#
#   def print_books
#
#   end
#
# end
#
# ClI.new.welcome

# 
# def welcome
#   puts "Welcome to the Book Searcher"
#   puts "Enter a search term to find books about:"
#   search_term = gets.chomp
# end
#
# def print_books
#
# end
#


puts "Welcome to the Book Searcher"
puts "Enter a search term to find books about:"
search_term = gets.chomp

response = RestClient.get("https://www.googleapis.com/books/v1/volumes?q=#{search_term}")
# at this point we have a string, we want to convert this string into a Hash
string = response.body

data = JSON.parse(string)

books = data["items"]

books.each do |book|
  title = book["volumeInfo"]["title"]
  author_data = book["volumeInfo"]["authors"]
  if author_data
    authors = author_data.join(" & ")
  else
    authors = "No Authors found for this book"
  end

  description_data = book["volumeInfo"]["description"]

  if description_data
    description = description_data[0..100] + "..."
  else
    description = "No description found for this book"
  end

  puts "Title: #{title}"
  puts "Authors: #{authors}"
  puts "Description: #{description}"

  # puts author names separated by an &

  # puts the first 100 characters of the description followed by ...

  puts "*" * 15
end


# binding.pry


# response = make_a_request("https://www.googleapis.com/books/v1/volumes?q=ruby+programming")

# response.each do |book|
#   # print out the info for each book
# end
