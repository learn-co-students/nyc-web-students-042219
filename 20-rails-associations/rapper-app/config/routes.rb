Rails.application.routes.draw do
# get "/rappers", to: "rappers#index"
resources :rappers, only: [:index, :new, :show, :create, :destroy]
get "/rappers/:id/fire", to: "rappers#fire", as: "fire"
delete "/rappers/:id/age", to: "rappers#delete_age"
get "/songs", to: "songs#index"
get "/songs/new", to: "songs#new"
get "/songs/:id", to: "songs#show"
post "/songs", to:"songs#create"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
