class ImageUploader < CarrierWave::Uploader::Base
  include CarrierWave::RMagick
  storage :file

  def store_dir
    "uploads/#{model.class.to_s.underscore}/#{mounted_as}/#{model.id}"
  end

  process :resize_to_limit => [640, 1136]

  def set_to_tile(x, y, rows, columns)
    width = 640 / columns
    height = 1136 / rows
    manipulate! do |img|
      attempts = 0
      begin
        img.crop(Magick::NorthWestGravity, x*width, y*height, width, height, true)
      rescue
        attempts += 1
        while attempts < 5
          retry
        end
      end #rescue block
    end
  end #method call
end
