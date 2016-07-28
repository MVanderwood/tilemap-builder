class PathUtil
  def self.public_path(*extensions)
    Rails.root.join("public", extensions.join("/"))
  end
end
