Rails.application.routes.draw do
# get "/rappers", to: "rappers#index"
resources :rappers, only: [:index, :new, :create, :destroy]
get "/rappers/:id/fire", to: "rappers#fire", as: "fire"
get "/rappers/:id", to: "rappers#show", as: "rapper"
delete "/rappers/:id/age", to: "rappers#delete_age"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
