Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create]
    resources :posts, except: [:new, :edit]  #destroy create update show index
    resources :comments, only: [:create, :index, :destroy] #need to add destroy and update
    resources :likes, only: [:create, :show, :destroy, :index]
  end

  # resources :posts, only: :show

  root to: 'static_pages#root'
end
