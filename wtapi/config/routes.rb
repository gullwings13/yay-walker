Rails.application.routes.draw do
  # devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  devise_for :users, controllers: { registrations: 'registrations' }
  namespace :api do
    namespace :v1 do
      
      resources :users do
        resources :tours do 
          resources :points
        end
      end
      
      resources :tours do
        resources :points
      end
      
      resources :points

      get '/all' => 'users#all'
      get '/profile' => 'users#profile'

      # post '/cart' => 'users#cartadd'
      # delete '/cart/$user_id/$product_id' => 'users#cartadd'


      # get 'post/index'
      post :auth, to: 'authentication#create'
      get  '/auth' => 'authentication#fetch'
    end

    namespace :v2 do
      # Things yet to come
    end
  end

end
