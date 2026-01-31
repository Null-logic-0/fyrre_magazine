Rails.application.routes.draw do
  resources :passwords, param: :token
  resources :articles, only: [ :index, :show ]
  resources :email_subscription, only: :create

  namespace :admin do
    get "dashboard", to: "admin_panel#index"
    resources :articles, except: [ :index, :show ]
    resources :users, only: [ :index, :update ]
  end

  get "login", to: "sessions#new"
  post "login", to: "sessions#create"
  delete "logout", to: "sessions#destroy"

  get "signup", to: "register#new"
  post "signup", to: "register#create"

  # Redirect to localhost from 127.0.0.1 to use same IP address with Vite server
  constraints(host: "127.0.0.1") do
    get "(*path)", to: redirect { |params, req| "#{req.protocol}localhost:#{req.port}/#{params[:path]}" }
  end

  get "up" => "rails/health#show", as: :rails_health_check

  root "home_page#index"
end
