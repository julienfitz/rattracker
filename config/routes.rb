Rails.application.routes.draw do
  root 'rat_sightings#home'
  resources :rat_sightings
end
