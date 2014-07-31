# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

def recent_date?(date_time)
  date_time.include?("2014")
end

def create_rat_sighting(row)
  RatSighting.create(
    created_date: row[3],
    location_type: row[4],
    zip: row[5].to_i,
    address: row[6],
    latitude: row[1],
    longitude: row[2])
end

def create_zip_codes(zip_code)
  unless ZipCode.find_by(code: zip_code)
    ZipCode.create(code: zip_code)
  end
end

first = true
CSV.foreach("./db/Rat_Sightings.csv") do |row|
  if !first && recent_date?(row[3])
    create_rat_sighting(row)
    create_zip_codes(row[5].to_i)
  end
  first = false
end
