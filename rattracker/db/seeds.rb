# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

first = true
CSV.foreach("./db/Rat_Sightings.csv") do |row|
  if !first
    RatSighting.create(
      created_date: row[0],
      location_type: row[1],
      zip: row[2],
      address: row[3],
      latitude: row[4],
      longitude: row[5]
      )
  end
  first = false
end