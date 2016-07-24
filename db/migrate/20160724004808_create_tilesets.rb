class CreateTilesets < ActiveRecord::Migration
  def change
    create_table :tilesets do |t|
      t.string :image
      t.integer :columns
      t.integer :rows

      t.timestamps null: false
    end
  end
end
