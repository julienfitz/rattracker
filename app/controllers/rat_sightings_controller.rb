class RatSightingsController < ApplicationController

def index
  @rat_sightings = RatSighting.all
  respond_to do |format|
    format.html
    format.json {render json: @rat_sightings}
  end
end

def show
end

def create
  @rat_sighting_addresses = parseAddress(rat_sighting_params['address'])
  render 'rat_sightings/show.html'
end


private

  def parseAddress(address)
    RatSighting.all.select do |rat_sighting|
      rat_sighting.zip == address_zip(address)
    end
  end

  def address_zip(address)
    address["zip"][0]['address_components'][0]['long_name'].to_i
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def rat_sighting_params
    params.require(:rat_sightings).permit(:zip, :address)
  end

end
