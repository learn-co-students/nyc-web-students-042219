Rails.application.routes.draw do
# get "/rappers", to: "rappers#index"
# get "/rappers/:id", to: "rappers#show"
resources :rappers, only: [:index, :show, :new]
get "/rappers/:id/fire", to: "rappers#fire"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
