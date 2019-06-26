Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :restaurants
      resources :reviews
      resources :customers 
    end
  end
end
