class CreateRatSightings < ActiveRecord::Migration
  def change
    create_table :rat_sightings do |t|
      t.float, :latitude
      t.float, :longitude
      t.datetime, :created_date
      t.string :location_type,
      t.integer, :zip
      t.string :address

      t.timestamps
    end
  end
end
