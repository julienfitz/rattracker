Rails.application.routes.draw do
  root 'rat_sightings#index'
  resources :rat_sightings
end
