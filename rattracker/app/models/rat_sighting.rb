class RatSighting < ActiveRecord::Base

  def self.zip_specific_sightings(params_zip)
    if params_zip == 0
      "That is not a valid zip code"
    else
      RatSighting.all.select do |rat_sighting|
        rat_sighting.zip == params_zip
      end
    end
  end

end
