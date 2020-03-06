class CreateTours < ActiveRecord::Migration[6.0]
  def change
    create_table :tours do |t|
      t.string :name
      t.string :description
      t.string :img_url
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
