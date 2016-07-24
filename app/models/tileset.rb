class Tileset < ActiveRecord::Base
  include CarrierWave::RMagick
  mount_uploader :image, ImageUploader
  after_create :set_tiles
  attr_reader :tile_index

  private def set_tiles
    @counter_index = 0
    columns.times do |x|
      rows.times do |y|
        ImageUploader.class_eval "
          version('image_#{@counter_index}') do
            process set_to_tile: [x, y, #{rows}, #{columns}]
          end
        "
        @counter_index += 1
      end
    end
  end

  def self.cleanse!
    FileUtils.rm_rf(Dir.glob("public/uploads/*"))
  end
end
