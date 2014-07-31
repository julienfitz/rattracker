class RatSightingsController < ApplicationController

def home
end

def index
  if @rat_sighting_addresses
    respond_to do |format|
      format.html
      format.json {render json: @rat_sighting_addresses}
    end
  else
    redirect_to 'root'
  end
end

def create
  @rat_sighting_addresses = parseAddress(params)
  respond_to do |format|
    format.js 
  end
end

private

  def parseAddress(address)
    RatSighting.all.select do |rat_sighting|
      rat_sighting.zip == address["zipcode"].to_i
    end
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def rat_sighting_params
    params.require(:rat_sightings).permit("address_components")
  end

end