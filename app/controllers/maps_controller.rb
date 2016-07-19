class MapsController < ApplicationController
  before_action :clean_cache
  
  def index
  end

  def upload_tileset
    @tiles = Tileset.new(
      tileset: params[:tileset],
      rows: params[:rows].to_i,
      columns: params[:columns].to_i
    ).tiles
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
