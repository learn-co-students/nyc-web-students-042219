# 'https://www.googleapis.com/books/v1/volumes?q=ruby+programming'
require 'rest-client' # httparty open-uri faraday
require 'pry'
require 'json'

# * Write an application that takes a search term from a user
# * Make a Request to the GoogleBooks API and get back some results
#   * https://www.googleapis.com/books/v1/volumes?q=ruby+programming
# * Display the titles, author names, and description for each book

puts "Welcome to the Book Searcher"

response = RestClient.get("https://www.googleapis.com/books/v1/volumes?q=ruby+programming")
# at this point we have a string, we want to convert this string into a Hash
string = response.body

data = JSON.parse(string)

books = data["items"]

books.each do |book|
  title = book["volumeInfo"]["title"]
  puts title

  puts "*" * 15
end


# binding.pry


# response = make_a_request("https://www.googleapis.com/books/v1/volumes?q=ruby+programming")

# response.each do |book|
#   # print out the info for each book
# end
