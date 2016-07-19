Rails.application.routes.draw do
  root 'maps#index'
  post '/upload' => 'maps#upload_tileset'
end
