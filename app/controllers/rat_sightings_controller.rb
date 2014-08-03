class RatSightingsController < ApplicationController

def index
  @rat_sighting_addresses = RatSighting.all
  respond_to do |format|
    format.html
    format.json {render json: @rat_sighting_addresses}
  end
end

def create
  @rat_sighting_addresses = parseAddress(params)
  @error = params['notice'] if params['notice']
  respond_to do |format|
    format.js 
  end
end

private

  def parseAddress(address)
    rat_sightings = RatSighting.all.select do |rat_sighting|
      rat_sighting.zip == address["zipcode"].to_i
    end
    rat_sightings.empty? ? "There are no rats in your area. Lucky you!" : rat_sightings
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def rat_sighting_params
    params.require(:rat_sightings).permit("address_components")
  end

end