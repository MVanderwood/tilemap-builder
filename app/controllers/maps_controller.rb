class MapsController < ApplicationController
  # before_action :clean_cache

  def index
  end

  def upload_tileset
    attempts ||= 0
    @tileset = Tileset.new(
      image: params[:tileset],
      rows: params[:rows],
      columns: params[:columns]
    )
    @tileset.save
    render 'index.html.erb'
  rescue
    attempts += 1
    retry unless attempts > 3
    flash[:danger] = "Unable to upload tileset. Please retry."
    redirect_to '/'
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
