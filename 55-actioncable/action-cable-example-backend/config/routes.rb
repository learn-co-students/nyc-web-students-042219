Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :feeds, only: [:show]
  resources :tweets, only: [:create]
  resources :likes, only: [:create]

  mount ActionCable.server => '/cable'
end
