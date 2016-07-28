require_dependency "lib/assets/path_util"

class Tile
  attr_reader :x, :y, :path
  def initialize(x, y, file)
    @x, @y = x, y
    @path = PathUtil.public_path("images", "cache", "#{@x}-#{@y}.png")
    file.write(@path)
  end

  def relative_path
    array = @path.to_s.split("/")
    array[array.index("images")..(array.size - 1)].join("/")
  end
end
