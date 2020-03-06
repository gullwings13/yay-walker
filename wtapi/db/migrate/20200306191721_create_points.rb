class CreatePoints < ActiveRecord::Migration[6.0]
  def change
    create_table :points do |t|
      t.float :lat
      t.float :long
      t.integer :order
      t.string :text
      t.string :picture_url
      t.references :tour, null: false, foreign_key: true

      t.timestamps
    end
  end
end
