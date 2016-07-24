class Tileset < ActiveRecord::Base
  include CarrierWave::RMagick
  mount_uploader :image, ImageUploader
  attr_reader :tiles
  after_create :set_tiles

  private

  def set_tiles
    counter = 0

    columns.times do |x|
      rows.times do |y|
        ImageUploader.class_eval "
          version('image_#{counter}') do
            process set_to_tile: [x, y, #{rows}, #{columns}]
          end
        "
        counter += 1
      end
    end
  end
end
