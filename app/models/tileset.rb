class Tileset < ActiveRecord::Base
  mount_uploader :image, TilesetUploader

  
  # include Magick
  # attr_reader :tiles
  #
  # def initialize(options)
  #   @tiles = tilefy(ImageList.new(
  #     options[:tileset].to_io.path)[0],
  #     options[:rows].to_i,
  #     options[:columns].to_i
  #   )
  #
  # end
  #
  # def self.cleanse!
  #   FileUtils.rm_rf(Dir.glob('app/assets/images/cache/*'))
  # end
  #
  # private
  #
  # def tilefy(image, rows, columns)
  #   width = image.columns / columns
  #   height = image.rows / rows
  #   tiles = []
  #   rows.times do |x|
  #     rows.times do |y|
  #       image_file = image.crop( Magick::NorthWestGravity, x * width, y * height, width, height, true)
  #       tiles << Tile.new(x, y, image_file)
  #     end
  #   end
  #   tiles
  # end
end
