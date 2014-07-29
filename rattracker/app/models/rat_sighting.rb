class RatSighting < ActiveRecord::Base

  def self.zip_specific_sightings(params_zip)
    RatSighting.all.select do |rat_sighting|
      rat_sighting.zip == params_zip.to_i
    end
  end

end
