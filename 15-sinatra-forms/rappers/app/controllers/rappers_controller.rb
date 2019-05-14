class RappersController < ApplicationController

# Index Action
  get "/rappers" do
    @rappers = Rapper.all
    erb :"rappers/index"
  end



#New Action
get "/rappers/new" do
  erb :"rappers/new"
end

post "/rappers" do
  rapper = Rapper.create(params)

  redirect "/rappers/#{rapper.id}"
  # some logic
end

# Show Action
  get "/rappers/:id" do
    @rapper = Rapper.find(params[:id])
    erb :"rappers/show"
  end



end
