class ZipCode < ActiveRecord::Base
  has_many :rat_sightings do
    def find_by_zip(rat_sighting)
      find_by(zip: rat_sighting.zip)
    end
  end

end