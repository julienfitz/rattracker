
class RatSighting < ActiveRecord::Base

<<<<<<< HEAD

=======
  def self.zip_specific_sightings(params_zip)
    if params_zip == 0
      "That is not a valid zip code"
    else
      RatSighting.all.select do |rat_sighting|
        rat_sighting.zip == params_zip
      end
    end
  end
>>>>>>> 129bf4d6587310959ee123e7aa4bd048566d3e61

end
