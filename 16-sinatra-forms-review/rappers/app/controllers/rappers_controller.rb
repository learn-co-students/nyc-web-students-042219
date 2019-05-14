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

# Update

# edit Action
  get "/rappers/:id/edit" do
    @rapper = Rapper.find(params[:id])
    erb :"rappers/edit"
  end

  put "/rappers/:id" do
    binding.pry
    @rapper = Rapper.find(params[:id])
    # @rapper.update()
    redirect "/rappers/#{@rapper.id}"
  end


# Delete
delete "/rappers/:id" do
  @rapper = Rapper.find(params[:id])
  @rapper.destroy
  redirect "/rappers"
end








end
