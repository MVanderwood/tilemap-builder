class Tile
  attr_reader :x, :y, :path
  def initialize(x, y, file)
    @x, @y = x, y
    @path = "app/assets/images/cache/#{@x}-#{@y}"
    file.write(@path)
  end
end
