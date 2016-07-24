class MapsController < ApplicationController
  # before_action :clean_cache

  def index
  end

  def upload_tileset
    @tileset = Tileset.new(
      image: params[:tileset],
      rows: params[:rows],
      columns: params[:columns]
    )
    @tileset.save
    render 'index.html.erb'
  end

  def send_json_file
  end

  def send_xml_file
  end

  private

  def clean_cache
    Tileset.cleanse!
  end
end
