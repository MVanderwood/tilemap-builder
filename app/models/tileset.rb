class Tileset < ActiveRecord::Base
  include CarrierWave::RMagick
  mount_uploader :image, ImageUploader
  after_create :set_tiles
  attr_reader :size

  private def set_tiles
    @size = 0
    columns.times do |x|
      rows.times do |y|
        ImageUploader.class_eval "
          version('image_#{@size}') do
            process set_to_tile: [x, y, #{rows}, #{columns}]
          end
        "
        @size += 1
      end
    end
  end

  def self.cleanse!
    FileUtils.rm_rf(Dir.glob("public/uploads/*"))
  end
end
