Rails.application.routes.draw do
# get "/rappers", to: "rappers#index"
resources :rappers, only: [:index, :new, :show, :create, :destroy]
get "/songs", to: "songs#index", as: "songs"
get "/songs/new", to: "songs#new"
post "/songs", to:"songs#create"
get "/rappers/:id/fire", to: "rappers#fire", as: "fire"
get "/songs/:id/edit", to: "songs#edit"
get "/songs/:id", to: "songs#show", as: "song"
patch "/songs/:id", to: "songs#create"
delete "/songs/:id", to: "songs#destroy"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
