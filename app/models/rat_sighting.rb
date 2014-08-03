class RatSighting < ActiveRecord::Base
  belongs_to :zip_code

  def self.zip_specific_sightings(params_zip)
    params_zip == 0 ? "That is not a valid zip code" : self.same_zip_sightings(params_zip)
  end

  def parsed_date
    self.created_date.split(" ")[0]
  end

  private
    def self.same_zip_sightings(params_zip)
      RatSighting.all.select do |rat_sighting|
        rat_sighting.zip == params_zip
      end
    end

end
